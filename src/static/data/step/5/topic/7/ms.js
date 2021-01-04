import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Berkomunikasi tentang Kod</h1>
                <p>
                    Komunikasi yang berkesan adalah aspek penting dalam mana-mana program pematuhan sosial. Banyak syarikat telah mempelajari
                    bahawa cuma mengaudit tempat kerja dan memulihkan pencabulan sahaja tidak akan menyelesaikan masalah buruh waktu menuai,
                    melombong dan tempat pengeluaran, tempat memproses dan tempat kerja yang lain. Latihan secara berterusan dan komunikasi,
                    pembinaan keupayaan dan tekanan kepada pembaikan berterusan didapati menjadi jalan yang berkesan untuk mengekalkan kemajuan
                    ke arah pematuhan yang lebih baik.
                </p>
                <p>
                    <Link to="/steps/4">
                        Langkah 4: Berkomunikasi dan Berlatih di Sepanjang Rantai Bekalan Anda
                    </Link>{" "}
                    akan berbincang mengenai semua hal mengenai cara untuk berkomunikasi tentang kod dan sistem pematuhan kepada pelbagai pendengar;
                    pekerja anda, pengurus bekalan, dan penyelia, pekerja di tempat rantai bekalan, kerajaan, pekerja pertubuhan, kumpulan komuniti
                    dan lain-lain. Ia juga akan membincangkan cara untuk membuat kod lebih mudah diakses oleh pihak berkepentingan dengan mengelak
                    bahasa yang sukar difahami dan memberi terjemahan dalam pelbagai bahasa.
                </p>
                <p>
                    <em>
                        *Catatan: Rujukan kepada syarikat tertentu dan entiti bukan kerajaan dalam panduan ini hanya untuk tujuan memberi maklumat bagi
                        menunjukkan amalan terbaik yang telah diperakui di peringkat antarabangsa , sejak aplikasi dikeluarkan. Merujuk kepada entiti
                        tidak patut ditafsirkan sebagai sokongan rasmi kepada entiti tersebut, produk atau perkhidmatan mereka oleh Jabatan Buruh AS
                        dan penyertaan mereka tidak boleh ditafsirkan sebagai tinjauan komprehensif mengenai amalan entiti ini di dalam semua bidang.
                    </em>
                    <em>.</em>
                </p>
            </div>
        </StaticData>
    );
};

export default ms;
