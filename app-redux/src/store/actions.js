export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';
export const ADICIONAR = 'ADICIONAR';

export function incrementar() {
  return { type: INCREMENTAR };
}

export function decrementar() {
  return { type: DECREMENTAR };
}

export function adicionar(valor) {
  return { type: ADICIONAR, payload: valor };
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (usuario) => ({
  type: LOGIN,
  payload: usuario,
});

export const logout = () => ({
  type: LOGOUT,
});