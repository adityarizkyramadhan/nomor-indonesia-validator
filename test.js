const { cekNomor } = require("./index.js");

function test() {
    const nomorTelepon = cekNomor("085704384348");
    const validasiError = nomorTelepon.validasi();
    if (!validasiError) {
        console.log("nomor valid:", nomorTelepon.nomorNasional());
        console.log("nomor internasional:", nomorTelepon.nomorInternasional());
        console.log("Penyedia layanan:", nomorTelepon.penyediaLayanan());
        console.log("Link WhatsApp:", nomorTelepon.linkWhatsApp());
    }
}


test();
