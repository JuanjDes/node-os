function informacionOS(os) {
    const datos = {
        nombre: os.hostname(),
        tipo: os.type(),
        version: os.version(),
        arquitectura: os.arch(),
        cpus: os.cpus().length,
        memoriaTotal: parseInt(os.totalmem() / (1024 * 1024))+' Mb',
        memoriaLibre: parseInt(os.freemem() / (1024 * 1024))+' Mb'
    };
    return datos;
}

export default informacionOS;

