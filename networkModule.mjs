function informacionRed (os) {
    const red = {
        Interfaz: os.networkInterfaces().Ethernet[0].scopeid,
        Familia: os.networkInterfaces().Ethernet[0].family,
        DireccionIP: os.networkInterfaces().Ethernet[0].address,
        Interno: os.networkInterfaces().Ethernet[0].internal


        /* nombre: os.networkInterfaces().Ethernet[0].family,
        direccionIP: os.networkInterfaces().Ethernet[0].address,
        mascara: os.networkInterfaces().Ethernet[0].netmask,
        ipv6: os.networkInterfaces().Ethernet[0].internalIPv6Address,
        mac: os.networkInterfaces().Ethernet[0].mac */
    };
    return red;
}

export default informacionRed;