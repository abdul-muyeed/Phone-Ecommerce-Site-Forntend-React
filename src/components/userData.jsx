

async function userData() {
    const res = await fetch('/api/refresh')
    const data = await res.json()

    if(res.status === 200) return data

    return null
}

export default userData