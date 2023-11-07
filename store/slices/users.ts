import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tmdb from "@/util/tmdb";
import { Thunk } from "..";

export enum connection {
  IDLE,
  LOADING,
  ERROR,
}

enum sessionType {
  GUEST,
  USER,
}

export interface User {
  session: string;
  avatar?: { gravatar: { hash?: string }; tmdb: { avatar_path?: string } };
  id?: number;
  username?: string;
}

interface Session {
  session: string;
  type: sessionType;
}

const initialState: {
  user?: User;
  sessions: Session[];
  status: connection;
} = {
  user: undefined,
  sessions: [],
  status: connection.IDLE,
};

function loadSessions(): Thunk {
  return (dispatch, getState) => {
    const sessions: Session[] = JSON.parse(
      localStorage.getItem("sessions") || "[]"
    );
    dispatch(actions.setSessions(sessions));

    if (sessions.length && !getState().users.user) {
      if (sessions[0].type === sessionType.USER)
        dispatch(actions.loadUserDetails(sessions[0].session));
      else dispatch(actions.setUser({ session: sessions[0].session }));
    }
  };
}

function saveSession(session: Session): Thunk {
  return (dispatch, getState) => {
    if (
      !getState()
        .users.sessions.map((i) => i.session)
        .includes(session.session)
    ) {
      dispatch(actions.setSessions(getState().users.sessions.concat(session)));
      localStorage.setItem(
        "sessions",
        JSON.stringify(getState().users.sessions)
      );
    }
  };
}

function loadUserDetails(session: string): Thunk {
  return async (dispatch) => {
    const details = await tmdb.get(`account/account_id?session_id=${session}`);
    dispatch(
      actions.setUser({
        session,
        avatar: details.avatar,
        id: details.id,
        username: details.username,
      })
    );
  };
}

function login(request_token: string): Thunk {
  return async (dispatch) => {
    try {
      dispatch(actions.setStatus(connection.LOADING));
      const session = await tmdb.post("authentication/session/new", {
        request_token,
      });
      dispatch(actions.loadUserDetails(session));
      dispatch(actions.saveSession(session));
      dispatch(actions.setStatus(connection.IDLE));
    } catch (error) {
      dispatch(actions.setStatus(connection.ERROR));
    }
  };
}

function hardLogout(): Thunk {
  return (dispatch, getState) => {
    const index = getState()
      .users.sessions.map((i) => i.session)
      .findIndex((item) => item === getState().users.user?.session);
    const newSessions = getState()
      .users.sessions.slice(0, index)
      .concat(getState().users.sessions.slice(index + 1));

    localStorage.setItem("sessions", JSON.stringify(newSessions));
    dispatch(actions.setSessions(newSessions));
    dispatch(actions.softLogout());
  };
}

function loginAsGuest(): Thunk {
  return async (dispatch) => {
    try {
      dispatch(actions.setStatus(connection.LOADING));
      const session = await tmdb.get("authentication/guest_session/new");
      dispatch(actions.setUser({ session }));
      dispatch(actions.saveSession(session));
      dispatch(actions.setStatus(connection.IDLE));
    } catch (error) {
      dispatch(actions.setStatus(connection.ERROR));
    }
  };
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, { payload }: { payload: User }) => {
      state.user = payload;
    },
    setSessions: (state, { payload }: { payload: Session[] }) => {
      state.sessions = payload;
    },
    setStatus: (state, { payload }: { payload: connection }) => {
      state.status = payload;
    },
    softLogout: (state) => {
      state.user = undefined;
    },
  },
});

export const actions = {
  ...usersSlice.actions,
  loadSessions,
  saveSession,
  login,
  hardLogout,
  loadUserDetails,
  loginAsGuest,
};
export const reducer = usersSlice.reducer;

export const middlewares = [];
