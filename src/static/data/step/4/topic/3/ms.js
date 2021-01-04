import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Menilai Impak Luaran dan Faktor Risiko</h1>
                <p>
                    Impak “Luaran” dan risiko merangkumi yang berkaitan dengan operasi syarikat, produk atau perkhidmatan melalui hubungan perniagaan,
                    di mana anda harus menggunakan pengaruh anda, dan risiko di mana anda boleh kawal, seperti yang timbul dari undang-undang nasional
                    atau perkembangan dalam operasi sekitar.
                </p>
                <p>
                    Sekiranya syarikat ingin mendapatkan bahan dari negara baru atau kawasan baru, anda mungkin sedang melakukan penilaian risiko dalam bentuk lain.
                    Penilaian risiko hak asasi manusia/pematuhan sosial patut termasuk dalam proses. Ini akan dibincangkan dalam seksyen berikut, <em>Risiko dan Impak
                    Pengumpulan Maklumat.</em> Penilaian harus melibatkan mengenal pasti orang atau kumpulan yang mungkin terpengaruh oleh aktiviti perniagaan anda dan
                    meramalkan kesan buruk yang mungkin akan berlaku. Penilaian begitu juga harus memperhitungkan kumpulan atau individu yang mudah dieksploit,
                    baik melalui keadaan hidup (misalnya kemiskinan, kekurangan pendidikan), atau melalui diskriminasi undang-undang dan diskriminasi sosial. Di
                    samping itu, penilaian harus mempengaruhi individu yang mungkin tersembunyi dari orang ramai dan akibatnya tidak dapat membantu hak mereka yang
                    terselamat dari rogol, penderaan seksual, penderita HIV/AIDS, dan pekerja tanpa dokumen. Sekurang-kurangnya, penilaian harus melibatkan kajian,
                    penyelidikan di lapangan  di negara/ masyarakat sasaran, dan kemudian audit awal di peringkat permulaan bagi menilai tahap pematuhan semasa.
                    Maklumat lanjut mengenai bagaimana melakukan jenis audit ini termasuk dalam{" "}
                    <Link to="/steps/5">Langkah 5, Pantau Pematuhan</Link>.
                </p>
                <p>
                    Sekiranya syarikat sudah mempunyai rantai bekalan yang mapan di mana ia mempunyai hubungan perniagaan yang agak stabil, anda harus menilai kesan dan
                    risiko yang berkaitan dengan pelaku dalam rantai bekalan. Ini harus dilakukan terlebih dahulu melalui latihan pemetaan rantai bekalan, sambil mengumpul
                    maklumat tentang pembekal yang lebih perlu dipantau, kajian di pejabat, kajian di padang di tempat sasaran, dan audit awal di peringkat permulaan mengenai
                    pembekal untuk menilai pematuhan semasa mereka. Data awal ini akan membantu anda mengenalpasti bidang yang boleh diperbaiki bagi pembekal. Maklumat lanjut
                    mengenai bagaimana melakukan jenis audit ini termasuk dalam{" "}
                    <Link to="/steps/5">Langkah 5, Pantau Pematuhan</Link>.
                </p>
            </div>
        </StaticData>
    );
};

export default ms;
