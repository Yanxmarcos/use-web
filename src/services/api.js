const API_BASE = "https://use-info-api.vercel.app";

export async function fetchEventos() {
  const res = await fetch(`${API_BASE}/api/eventos`);
  const json = await res.json();
  if (!json.success) throw new Error("Error al obtener eventos");
  return json.data;
}

export async function fetchEventoPorId(id) {
  const res = await fetch(`${API_BASE}/api/eventos/${id}`);
  const json = await res.json();
  if (!json.success) return null;
  return json.data;
}

export async function fetchEventosRecientes(limite = 3) {
  const res = await fetch(`${API_BASE}/api/eventos/recientes?limite=${limite}`);
  const json = await res.json();
  if (!json.success) throw new Error("Error al obtener eventos recientes");
  return json.data;
}