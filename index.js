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


const minPanjang = 10
const maksPanjang = 13

module.exports = cekNomor = (nomor) => {
    if (/\D/.test(nomor)) {
        return false
    }

    if (nomor.length < minPanjang || nomor.length > maksPanjang) {
        return false
    }

    if (!(nomor.substring(2) == "62" || nomor[0] == "0")) {
        return false
    }


}

