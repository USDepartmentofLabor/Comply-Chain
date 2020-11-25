import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Pengesahan bebas</h1>
                <p>
                    Pengesahan pihak ketiga yang bebas terdiri daripada penilaian pematuhan sosial lengkap syarikat, untuk 
                    memastikan sama ada ia dilaksanakan dengan betul dan menyeluruh. Pengesahan ini harus dibuat 
                    sekurang-kurangnya setiap tahun. 
                </p>
                <p>
                    Pengesah harus terdiri daripada Badan-Badan Pengesahan yang bertauliah (CB), mematuhi sama ada ISO/IEC 17021 
                    atau ISO/IEC Panduan 65, atau sistem relevan yang lain. ISO/IEC 17021 mengandungi prinsip dan keperluan 
                    untuk kecekapan, konsisten dan tidak berat sebelah dalam audit dan persijilan sistem pengurusan semua jenis 
                    dan untuk badan-badan yang menyediakan aktiviti-aktiviti ini. ISO/IEC Panduan 65 mengandungi keperluan am 
                    pihak ketiga yang menjalankan produk atau khidmat sistem persijilan yang harus ditemui untuk diiktiraf 
                    sebagai cekap dan boleh dipercayai.
                </p>
                <p>
                    Pengesahan bebas patut termasuk perundingan dengan pihak berkepentingan yang berkenaan, termasuk kesatuan sekerja 
                    di mana mereka wujud. Pengesah patut melakukan audit saksi, yang terdiri daripada pengesah yang mengiringi dan 
                    memerhati audit yang dijalankan oleh pengaudit syarikat yang sedia ada (dalaman, luar atau bebas) dan kemudian 
                    menguji data audit bagi mengesahkan bahawa sistem data syarikat boleh dipercayai. Pengumuman audit saksi penting 
                    apabila perlu untuk mendapatkan akses kepada kakitangan khusus atau dokumentasi; audit saksi yang tidak diumumkan 
                    juga berguna dalam mengesahkan dasar syarikat yang dilaksanakan dengan baik. Pengesahan juga patut termasuk 
                    pemeriksaan dasar dan prosedur pemulihan syarikat, dan juga kes khusus pemulihan, untuk memeriksa sama ada ia 
                    berkesan. 
                </p>
                <p>
                    Pengesah patut memberikan syarikat laporan mengenal pasti kelemahan yang terdapat dalam sistem syarikat dan 
                    pelaksanaan sistem. Pengesah juga boleh sarankan langkah pemulihan syarikat boleh ambil untuk menangani kelemahan. 
                </p>
                <ExampleInAction id="ind-verify">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Contoh dalam Tindakan: Mencari pengesahan dan standard dalam fesyen. 
                        </strong>
                    </h2>
                    <p>
                        Tiada pengesahan dan standard untuk perkataan seperti “kelestarian” dan “ketelusan;” bagaimanapun, beberapa 
                        syarikat kecil dan baru kini berusaha untuk menemui keperluan pengguna bagi maklumat yang boleh dipercayai 
                        dalam usaha syarikat untuk menangani rantai bekalan penderaan buruh, antara lain. Syarikat baru seperti  {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.shopwearwell.com/"
                            title="Wearwell"
                        >
                            Wearwell
                        </a>{""}
                    ,* 
                    {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goodonyou.eco/"
                            title="GoodOnYou"
                        >
                            GoodOnYou
                        </a>{""}
                    ,* 
                    dan {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://compareethics.com/"
                            title="Compare Ethics"
                        >
                            Compare Ethics
                        </a>{""}
                    * 
                    menapis dakwaan syarikat dalam laporannya dan dokumen audit dan mengesahkan dakwaan tersebut berbanding kenyataan, 
                    lantas menjadi platform bagi pengguna untuk mengakses jenama yang menemui standard tertentu. Model ini menjadi 
                    cabaran tetapi menunjukkan keinginan dari pengguna untuk bantu mengupas dakwaan dan menubuhkan pengesahan dakwaan 
                    tersebut dalam pasaran pakaian yang berjumlah kira-kira $1.5 trilion pada 2020.
                        
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default ms;
