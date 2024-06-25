const categoriaAPI = async () => {
  const db = await fetch('http://localhost:3000/categorias')
  const response = await db.json()

  return response
}

export default {categoriaAPI}