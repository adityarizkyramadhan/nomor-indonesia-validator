const penyediaLayanan = {
    "852": "Telkomsel Kartu AS",
    "853": "Telkomsel Kartu AS",
    "811": "Telkomsel Kartu Halo",
    "812": "Telkomsel Kartu Simpati atau Halo",
    "813": "Telkomsel Kartu Simpati",
    "821": "Telkomsel Kartu Simpati",
    "822": "Telkomsel Kartu Loop",
    "823": "Telkomsel Kartu AS",
    "851": "Telkomsel Kartu AS atau By.u",
    "855": "Indosat Ooredoo Matrix",
    "856": "Indosat Ooredoo IM3",
    "857": "Indosat Ooredoo IM3",
    "858": "Indosat Ooredoo Mentari",
    "814": "Indosat Ooredoo Indosat M2",
    "815": "Indosat Ooredoo Matrix atau Mentari",
    "816": "Indosat Ooredoo Matrix atau Mentari",
    "817": "XL Axiata",
    "818": "XL Axiata",
    "819": "XL Axiata",
    "859": "XL Axiata",
    "877": "XL Axiata",
    "878": "XL Axiata",
    "832": "Axis",
    "833": "Axis",
    "838": "Axis",
    "895": "Three (3)",
    "896": "Three (3)",
    "897": "Three (3)",
    "898": "Three (3)",
    "899": "Three (3)",
    "881": "Smartfren",
    "882": "Smartfren",
    "883": "Smartfren",
    "884": "Smartfren",
    "885": "Smartfren",
    "886": "Smartfren",
    "887": "Smartfren",
    "888": "Smartfren",
    "889": "Smartfren"
};
const MengandungHurufError = new Error("nomor ponsel mengandung huruf");
const PanjangTidakSesuaiError = new Error("Panjang nomor ponsel tidak sesuai standar");
const PrefixError = new Error("nomor telepon tidak sesuai standar prefix");
const LayananError = new Error("Layanan tidak tersedia");
const minPanjang = 10
const maksPanjang = 13

class NomorTelepon {
    constructor(nomor) {
        this.nomor = nomor;
        this.nomorTanpaPrefix = "";
        this.layanan = "";
        this.validasi = false;
    }

    validasi() {
        const rgx = /^[0-9]*$/;
        if (!rgx.test(this.nomor)) {
            return MengandungHurufError;
        }

        if (this.nomor.length > maksPanjang || this.nomor.length < minPanjang) {
            return PanjangTidakSesuaiError;
        }

        if (!(this.nomor[0] === '0' || this.nomor.substring(0, 2) === "62")) {
            return PrefixError;
        }

        if (this.nomor[0] === '0') {
            this.nomorTanpaPrefix = this.nomor.substring(1);
        } else if (this.nomor.substring(0, 2) === "62") {
            this.nomorTanpaPrefix = this.nomor.substring(2);
        } else {
            return PrefixError;
        }

        const layanan = penyediaLayanan[this.nomorTanpaPrefix.substring(0, 3)];

        if (!layanan) {
            return LayananError;
        }

        this.validasi = true;
        this.layanan = layanan;

        return null;
    }

    nomorNasional() {
        if (!this.validasi) {
            return "validasi terlebih dahulu";
        }
        return "0" + this.nomorTanpaPrefix;
    }

    nomorInternasional() {
        if (!this.validasi) {
            return "validasi terlebih dahulu";
        }
        return "62" + this.nomorTanpaPrefix;
    }

    penyediaLayanan() {
        if (!this.validasi) {
            return "validasi terlebih dahulu";
        }
        return this.layanan;
    }

    linkWhatsApp() {
        return "https://api.whatsapp.com/send/?phone=" + this.NomorInternasional();
    }

    linkWhatsAppDenganPesan(pesan) {
        const kalimat = pesan.replace(/ /g, "+");
        return this.linkWhatsApp() + "&text=" + kalimat;
    }
}

function cekNomor(nomor) {
    return new NomorTelepon(nomor);
}


module.exports = {
    cekNomor,
    NomorTelepon
}
