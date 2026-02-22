import {
  INCREMENTAR,
  DECREMENTAR,
  ADICIONAR,
  LOGIN,
  LOGOUT,
} from './actions';

const initialState = {
  valor: 0, // contador da aula
  usuarioLogado: null, // atividade de login
};

// reducer SEMPRE recebe: (estadoAtual, action)
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return { ...state, valor: state.valor + 1 };

    case DECREMENTAR:
      return { ...state, valor: state.valor - 1 };

    case ADICIONAR:
      return { ...state, valor: state.valor + action.payload };

    case LOGIN:
      return {
        ...state,
        usuarioLogado: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        usuarioLogado: null,
      };

    default:
      return state;
  }
}