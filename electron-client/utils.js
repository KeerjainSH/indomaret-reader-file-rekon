// class ReconFile {
//     constructor() {
//         this.asia_finance = ['INDOMARET-AF-20240515030000'];
//         this.air_asia = [`INDAIRPAY_20240515`];
//         this.allianz = ['DATA0007517290020240516'];
//         this.allobank = ['CashInAlloBank_20240515'];
//         this.bank_ina = ['IDMINA_BINA-CI_20240515', 'IDMINA_BPKGSS_20240515','IDMINA_BPKNGSS_20240515','IDMINA_KSPMAU_20240515','IDMINA_PKBM01_20240515','RekonSetorTunai_BANKINA_KIS_20240515'];
//         this.bri_etilang = ['KIS_BRIEtilang_20240515'];
//         this.bumi_putera = ['DATA0007517150020240516'];
//         this.dana = ['KIS_DANA_20240515'];
//         this.danamon = ['RECON_DCASH_KIS_SETOR_20240515(enc)','RECON_DCASH_KIS_SETOR_20240515(dec)'];
//         this.dbs_pp0a = ['DBS_KIS_SUCCESS_20240515','DBS_KIS_SUSPECTPENDING_20240515'];
//         this.denz_tv = ['IDMDENSTV_20240515'];
//         this.doku = ['IDMDOKU_20240515'];
//         this.gkm = ['IDM_GKM_20240515'];
//         this.gopay = ['RekonHarian_GOPAY_KIS_20240515'];
//         this.hifi = ['DATA7709351650020240516'];
//         this.aeon = ['DATA0007514101820240516'];
//         this.idm_marco = ['IDM_IDMARCO20240515'];
//         this.asuransi_bintang = ['IDMAsuransiBintang20240515'];
//         this.baf = ['IDMBAF20240515'];
//         this.beta_finance = ['IDMBetaFinance20240515'];
//         this.bfi = ['IDMBFIPAY_20240515'];
//         this.bima_sakti = ['20240515_INDOMARETBMS'];
//         this.blibli = ['IDMBLIBLI20240515'];
//         this.bpjs_denda = ['770935_BPJSKSDenda_20240126'];
//         this.bpjs_kis = ['Summary_IDM_bpjsks_20240516'];
//         this.bpjs_ketenagakerjaan = ['IDM_BPJSTK_770935_16052024','Summary_IDM_BPJSTK_770935_16052024',
//             'KIS_BPJSTK_770935_080014_20240516','BPJSTK_770935_15052024','Summary_BPJSTK_770935_15052024',
//             '770935_080014_20240515'];
//         this.bringing_life = ['IDMBringinLife20240515'];
//         this.buana_multi_dana = ['IDMBUANAMULTIDANA20240515'];
//         this.bukalapak = ['IDMBUKALAPAK20240515'];
//         this.cbn = ['20240515_INDOMARETBMS'];
//         this.chubblife = ['IDMCHUBBLIFE15-May-2024'];
//         this.cnaf = ['IDMCNAF20240515'];
//         this.ctl_pay = ['IDMCTLPAY_20240515'];
//         this.elevenia = ['IDMELEVENIA20240515'];
//         this.fatspay = ['IDMFASPAY20240515'];
//         this.fif = ['DATA0007514100420240516'];
//         this.first_media = ['IDMFIRSTMEDIA20240515'];
//         this.hdf = ['IDM-02220240515'];
//         this.home_credit = ['INDOMARET-20240515035413'];
//         this.idm_indo_grosir = ['Transactions150524'];
//         this.indo_mobil = ['INDO-20240515'];
//         this.idm_indosat_m2 = ['IDMINDOSATM220240515'];
//         this.isaku = ['Transactions150524'];
//         this.itc_finance = ['IDMITCF20240515'];
//         this.jakmall = ['IDMJAKMALL20240515'];

//     }

//     setDateAsiaFinance(newDate) {
//         const files = this.asia_finance.map(file => {
//             // Regular expression to match the date pattern (first 8 digits in the last section)
//             let datePattern = /-\d{8}/;
//             const updatedFileName = file.replace(datePattern, `-${newDate}`);
//             return updatedFileName;
//         });

//         this.asia_finance = files;
//     }

//     setDateAirAsia(newDate) {
//         const files = this.air_asia.map(file => {
//             const parts = originalString.split('_');
//             parts[parts.length-1] = newDate;
//             const updatedFileName = parts.join('_');
//             return updatedFileName;
//         });
//         this.air_asia = files;
//     }

//     setDateAllianz(newDate) {
//         const files = this.allianz.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });
//         this.allianz = files;
//     }

//     setDateAllobank(newDate) {
//         const files = this.allobank.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });
//         this.allobank = files
//     }

//     setDateBankIna(newDate) {
//         const files = this.bank_ina.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });
//         this.bank_ina = files;
//     }
    
//     setDateBRIEtilang(newDate) {
//         const files = this.bri_etilang.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });
//         this.bri_etilang = files;
//     }

//     setDateBumiPutera(newDate) {
//         const files = this.bumi_putera.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });
//         this.bumi_putera = files;
//     }

//     setDateDana(newDate) {
//         const files = this.dana.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.dana = files;
//     }
//     setDateDanamon(newDate) {
//         const files = this.danamon.map(file => {
//             // Regular expression to match the date pattern (8 digits before the parenthesis)
//             let datePattern = /(\d{8})(?=\(\w+\))$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.danamon = files;
//     }
    
//     setDateDBSPP0A(newDate) {
//         const files = this.dbs_pp0a.map(file => {
//              // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.dbs_pp0a = files;
//     }

//     setDenzTv(newDate) {
//         const files = this.denz_tv.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.denz_tv = files;
//     }

//     setDateDoku(newDate) {
//         const files = this.doku.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.doku = files;
//     }

//     setDateGKM(newDate) {
//         const files = this.gkm.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.gkm = files;
//     }

//     setDateGopay(newDate) {
//         const files = this.gopay.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.gopay = files;
//     }

//     setDateHifi(newDate) {
//         const files = this.hifi.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         tis.hifi = files;
//     }

//     setDateAeon(newDate) {
//         const files = this.aeon.map(file => {
//             // Regular expression to match the date pattern (8 digits at the end of the string)
//             let datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.aeon = files;
//     }

//     setDateIDMMarco(newDate) {
//         const files = this.idm_marco.map(file => {
//             // Regular expression to match the date pattern (8 digits in the middle of the string)
//             let datePattern = /\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.idm_marco = files
//     }

//     setDateAsuransiBintang(newDate) {
//         const files = this.asuransi_bintang.map(file => {
//             // Regular expression to match the date pattern (8 digits in the middle of the string)
//             let datePattern = /\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.asuransi_bintang = files;
//     }

//     setDateBAF(newDate) {
//         const files = this.baf.map(file => {
//             // Regular expression to match the date pattern (8 digits in the middle of the string)
//             let datePattern = /\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.baf = files;
//     }

//     setDateBetaFinance(newDate) {
//         const files = this.beta_finance.map(file => {
//             // Regular expression to match the date pattern (8 digits in the middle of the string)
//             let datePattern = /\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.beta_finance = files
//     }

//     setDateBFI(newDate) {
//         const files = this.bfi.map(file => {
//             // Regular expression to match the date pattern (8 digits after the underscore)
//             let datePattern = /_(\d{8})/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.bfi = files;
//     }

//     setDateBimasakti(newDate) {
//         const files = this.bima_sakti.map(file => {
//             // Regular expression to match the date pattern (8 digits at the beginning of the string)
//             let datePattern = /^\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.bima_sakti = files;
//     }

//     setDateBlibli(newDate) {
//         const files = this.blibli.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             let datePattern = /\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.blibli = files;
//     }

//     setDateBPJSDenda(newDate) {
//         const files = this.bpjs_denda.map(file => {
//             // Regular expression to match the date pattern (8 digits after the underscore)
//             let datePattern = /_\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.bpjs_denda = files;
//     }

//     setDateBPJSKis(newDate) {
//         const files = this.bpjs_kis.map(file => {
//             // Regular expression to match the date pattern (8 digits after the underscore)
//             let datePattern = /_\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.bpjs_kis = files;
//     }

//     setDateBPJSKetenagakerjaan(newDate) {
//         const files = this.bpjs_ketenagakerjaan.map(file => {
//             if (file.includes('770935_080014_')) {
//                 let datePattern = /_\d{8}$/;
//                 const updatedFileName = file.replace(datePattern, newDate);
//                 return updatedFileName;
//             }

//             let datePattern = /_\d{8}$/;
//             const dateFormatDDMMYYYY = newDate.slice(6, 8) + newDate.slice(4, 6) + newDate.slice(0, 4);
//             const updatedFileName = file.replace(datePattern, dateFormatDDMMYYYY);
//             return updatedFileName;
//         });

//         this.bpjs_ketenagakerjaan = files;
//     }

//     setDateBringingLife(newDate) {
//         const files = this.bringing_life.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.bringing_life = files;
//     }

//     setDateBuanaMultiDana(newDate) {
//         const files = this.buana_multi_dana.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.buana_multi_dana = files;
//     }

//     setDateBukalapak(newDate) {
//         const files = this.bukalapak.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.bukalapak = files
//     }

//     setDateCBN(newDate) {
//         const files = this.cbn.map(file => {
//             // Regular expression to match the date pattern (8 digits before the string)
//             const datePattern = /\d{8}/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.cbn = files;
//     }

//     setDateChubbLife(newDate) {
//         const files = this.chubblife.map(file => {
//             const year = newDate.substring(0, 4);
//             const month = newDate.substring(4, 6);
//             const day = newDate.substring(6, 8);
//             const date = new Date(`${year}-${month}-${day}`);
//             const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//                                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            
//             const formattedDay = date.getDate();
//             const formattedMonth = monthNames[date.getMonth()];
//             const formattedYear = date.getFullYear();
            
//             // Construct the formatted date string
//             const formattedDate =  `${formattedDay}-${formattedMonth}-${formattedYear}`;

//             // Define the regex pattern to match the date format DD-Month-YYYY
//             const datePattern = /\d{1,2}-[a-zA-Z]{3}-\d{4}/;
//             const updatedFileName = file.replace(datePattern, newFormattedDate);
//             return updatedFileName;
//         });

//         this.chubblife = files;
//     }

//     setDateCNAF(newDate) {
//         const files = this.cnaf.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.cnaf = files;
//     }

//     setDateCTLPay(newDate) {
//         const files = this.ctl_pay.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.ctl_pay = files;
//     }
    
//     setDateElevenia(newDate) {
//         const files = this.elevenia.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.elevenia = files;
//     }

//     setDateFastpay(newDate) {
//         const files = this.fatspay.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.fatspay = files;
//     }

//     setDateFIF(newDate) {
//         const files = this.fif.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.fif = files;
//     }

//     setDateFirstMedia(newDate) {
//         const files = this.first_media.map(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.first_media = files
//     }

//     setDateHDF(newDate) {
//         const files = this.hdf(file => {
//             // Regular expression to match the date pattern (8 digits after the string)
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.hdf = files
//     }

//     setDateHomeCredit(newDate) {
//         const files = this.home_credit.map(file => {
//             const datePattern = /-(\d{8})(\d+)/;
//             const updatedFileName = file.replace(datePattern, `-${newDate}$2`);
//             return updatedFileName;
//         });

//         this.home_credit = files;
//     }

//     setDateIDMIndoGrosir(newDate) {
//         const files = this.idm_indo_grosir.map(file => {
//             const datePattern = /\d{6}$/;
//             const updatedFileName = file.replace(datePattern, newDate.substring(2));
//             return updatedFileName;
//         });

//         this.idm_indo_grosir = files;
//     }

//     setDateIndoMobil(newDate) {
//         const files = this.indo_mobil.map(file => {
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.indo_mobil = files
//     }

//     setDateIDMIndosatM2(newDate) {
//         const files = this.idm_indosat_m2.map(file => {
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.idm_indosat_m2 = files;
//     }

//     setDateIsaku(newDate) {
//         const files = this.isaku.map(file => {
//             const formattedDate = newDate.substring(4, 6) + newDate.substring(6, 8) + newDate.substring(2, 4);
//             const datePattern = /\d{6}$/;
//             const updatedFileName = file.replace(datePattern, formattedDate);

//             return updatedFileName;
//         });

//         this.isaku = files;
//     }

//     setDateITCFinance(newDate) {
//         const files = this.itc_finance.map(file => {
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         });

//         this.itc_finance = files
//     }

//     setDateJakmall(newDate) {
//         const files = this.jakmall.map(file => {
//             const datePattern = /\d{8}$/;
//             const updatedFileName = file.replace(datePattern, newDate);
//             return updatedFileName;
//         })

//         this.jakmall = files
//     }
// }


async function fetchFilesFromFTP(client) {

    try {
        console.log("Connecting to FTP server...");

        await client.access({
            host: process.env.FTP_HOST,
            port: process.env.FTP_PORT, // Specify the port separately
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD, // Use the correct password as specified in docker-compose.yml
            secure: false
        });

        console.log("Connected to FTP server.");

        const files = await client.list(process.env.FTP_PATH);

        return files;
    } catch (error) {
        console.error("Error connecting to FTP server:", error);
    } finally {
        client.close();
        console.log("FTP client closed.");
    }
}

const generateFileNamesWithDates = (fileNames, startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const result = [];

    // Helper function to format the date as DDMMYY
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}${month}${year}`;
    }

    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        const formattedDate = formatDate(date);
        fileNames.forEach(file => {
            result.push(`${file.file_name}${formattedDate}`);
        });
    }

    return result;
}

function checkingFiles(ftpFiles, fileNames, startDate, endDate) {

    const founds = [];
    const notFounds = [];
    const fileNamesWithDate = generateFileNamesWithDates(fileNames, startDate, endDate)

    fileNamesWithDate.forEach(name => {
        const found = ftpFiles.find(file => file.name.slice(0, file.name.lastIndexOf('.')) === name);
        if (found) {
            founds.push(found);
            return;
        }
        notFounds.push(name)
    })

    return {founds, notFounds}
}

module.exports = {
    fetchFilesFromFTP,
    checkingFiles
}

