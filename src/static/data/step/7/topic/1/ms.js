import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Mengaudit: Memulakan</h1>
                <p>
                    Mengaudit sosial adalah cara utama—selain daripada penglibatan dengan kesatuan sekerja/pekerja dan mekanisme 
                    rungutan—bagi mendapatkan maklumat mengenai pencabulan kod tingkah laku syarikat dalam rantai bekalan anda. 
                    Mengaudit mendedahkan masalah; ia tidak menyelesaikan masalah. Ia secebis dari sistem pematuhan sosial, dan 
                    tidak boleh dan sepatutnya tidak dibuat berasingan daripada penglibatan pihak berkepentingan, komunikasi dan 
                    langkah lain dalam proses.
                </p>
                <p>
                    Mengaudit penting dalam melaksanakan sistem pematuhan sosial yang berkesan dan harus diikuti dengan proses hasil 
                    audit, penilaian data audit, dan merancang dan aktiviti berdasarkan penilaian. 
                </p>
                <p>
                    Seperti yang dibincangkan dalam{" "}
                    <Link to="/steps/3">
                        Step 1, Engage Stakeholders and Partners
                    </Link>
                    , sekiranya anda sebahagian daripada industri atau kumpulan pelbagai industri, kumpulan ini mungkin sudah ada 
                    pengaudit terlatih dan/atau bahan latihan pengaudit. Ia mungkin sudah ada alat audit yang lengkap yang selari 
                    dengan kod kumpulan. Banyak daripada kumpulan ini menyelaras untuk melakukan audit bersama oleh pembekal yang 
                    dikongsi, atau untuk berkongsi laporan audit. 
                </p>
                <p>
                    Setelah anda menyasarkan beberapa bidang rantai bekalan anda sebagai yang mempunyai risiko tinggi dan beritahu 
                    individu dan pertubuhan yang berkenaan peranan dan tanggungjawab mereka dalam sistem pematuhan sosial anda, 
                    anda boleh membuat audit. Bagi memastikan audit yang berjaya, anda patut memastikan anda mempunyai kakitangan 
                    yang cukup, dan mereka mempunyai alat yang diperlukan.
                </p>
                <p>
                    Juga penting untuk mencatatkan bahawa syarikat yang boleh meneroka jalan lain untuk memantau pematuhan di luar 
                    proses audit tradisional. Semakin banyak, syarikat yang meneroka cara lain untuk mengumpul maklumat dan memantau 
                    pematuhan, seperti bergantung kepada teknologi, seperti yang diketengahkan dalam beberapa contoh dalam seksyen 
                    ini, dan melalui rakan kongsi yang wujud dengan komuniti NGO dan masyarakat sivil yang lain, antara lain. 
                </p>
                <h2>Peranan Utama Pekerja dan Kesatuan Sekerja</h2>
                <p>
                    Salah satu cara yang paling berkesan untuk memantau rantai bekalan ialah melalui pekerja sendiri dan kesatuan 
                    sekerja yang mewakili mereka. Pekerja dan kesatuan sekerja boleh membawa isu untuk perhatian syarikat sebelum 
                    sesuatu audit dijalankan. Sekiranya kesatuan sekerja wujud dalam tempat kerja yang sedang diaudit, temuduga 
                    pekerja dan pandangan mereka patut menjadi sebahagian daripada audit. 
                </p>
                <p>
                    Dalam mana-mana audit, apabila pencabulan berlaku, anda harus memulihkan keadaan. Ini terdapat secara terperinci 
                    dalam{" "}
                    <Link to="/steps/8">Step 6, Remediate Violations</Link>.
                </p>

                <ExampleInAction id="better_work_assessment">
                <h3>
                    <ExampleInAction.Icon alt="Lightbulb"/>
                        Contoh dalam Tindakan: Suara Pekerja 
                </h3>
                <p>
                    Semakin banyak, entiti perniagaan mendapati proses audit tradisional menggunakan pensel dan kertas menyusahkan dan 
                    kadang kala mencabar apabila hendak menggabungkan dengan suara pekerja.  Untuk mengurangkan isu, kumpulan kini 
                    bertumpu kepada teknologi, terutama telefon bimbit, untuk mencari jalan menjawab panggilan pekerja. 
                </p>
                <p>
                    Salah satu contoh ialah{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ethicaltoyprogram.org/en/"
                        title="The Ethical Toy Company"
                    >
                        <em>
                        The Ethical Toy Company
                        </em>
                    </a>
                    * dan kerjasamanya dengan 
                    {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.microbenefits.com/"
                            title="MicroBenefits"
                        >
                            <em>
                            MicroBenefits
                            </em>
                        </a>
                    * 
                    dan dengan pembiayaan
                    {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://thewaltdisneycompany.com/"
                            title="The Walt Disney Company"
                        >
                            <em>
                            The Walt Disney Company
                            </em>
                        </a>
                    * 
                    sebagai perintis teknologi suara pekerja di 50 kilang permainan di China.  Perintis industri yang bermula pada 2018, 
                    diharapkan dapat mengangkat teknologi mobil sebagai cara untuk berkongsi dan mengumpul maklum balas dari pekerja mengenai 
                    keadaan tempat kerja dalam rantai bekalan permainan.
                </p>
            </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default ms;
