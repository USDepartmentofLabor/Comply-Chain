import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Apa yang pihak berkepentingan boleh lakukan</h1>
                <p>
                    Terdapat cara yang bermanfaat untuk bekerjasama dan berkongsi
                    dengan pihak berkepentingan dalam setiap komponen sistem
                    pematuhan sosial. Berikut terdapat beberapa contoh:
                </p>
                <div className="indent-margin">
                    <h2>Penyebab akar</h2>
                    <p className="indent-margin">
                        Seperti yang dinyatakan sebelum ini, menangani punca penganiayaan
                        pekerja adalah tanggungjawab kerajaan. Bekerja dengan kerajaan untuk
                        mendapatkan lebih banyak peruntukan sumber bagi isu ini boleh
                        menghasilkan manfaat jangka panjang, dan berkemungkinan lebih
                        berkesan apabila beberapa syarikat bekerjasama.
                    </p>
                    <h2>Perkembangan kod tingkah laku</h2>
                    <p className="indent-margin">
                        Salah satu prinsip perkembangan kod tingkah laku yang baik ialah
                        memasukkan input dari pelbagai pihak berkepentingan. Anda boleh
                        mendapatkan input pada tahap awal merangka kod atau mengekalkan
                        kumpulan penyumbang yang memberikan idea dan maklum balas mengenai
                        kod tersebut secara berterusan.
                    </p>
                    <h2>Penilaian risiko</h2>
                    <p className="indent-margin">
                        Memahami risiko buruh kanak-kanak, buruh paksa dan isu tempat kerja
                        agak sukar kerana kekurangan data empirikal. Input dari sebilangan
                        besar orang berpengetahuan adalah penting untuk mendapatkan idea
                        yang tepat mengenai risiko, dan juga cadangan untuk mengurangkannya.
                    </p>
                    <h2>Latihan</h2>
                    <p className="indent-margin">
                        Program pematuhan sosial yang berjaya mesti melabur banyak dalam
                        latihan dan peningkatan keupayaan. Penglibatan pihak berkepentingan
                        membawa banyak faedah; sebagai contoh, memastikan bahawa bahan
                        latihan sesuai dengan budaya.
                    </p>
                    <h2>Komunikasi</h2>
                    <p className="indent-margin">
                        Pihak berkepentingan boleh membaiki saluran komunikasi; contohnya, wakil
                        kesatuan sekerja boleh menerima maklum balas dan mendengar kebimbangan
                        pekerja di tempat kerja di mana kesatuan sekerja wujud, sementara kumpulan
                        masyarakat sivil boleh secara khusus mengatur mekanisme untuk mendengar
                        rungutan dan saluran komunikasi yang lain di kemudahan yang tiada kesatuan sekerja.
                    </p>
                    <h2>Pengauditan dan pemantauan bebas/pengesahan</h2>
                    <p className="indent-margin">
                        Beberapa kumpulan berasaskan komuniti dilatih untuk menjalankan
                        pemantauan dan perkhidmatan pengesahan bebas; yang lain boleh
                        memberikan “pemeriksaan” bebas untuk pemantauan dalam dan luar.
                    </p>
                    <h2>Pemulihan</h2>
                    <p className="indent-margin">
                        Pertubuhan yang layak boleh memberikan perkhidmatan kepada
                        mangsa pencabulan hak buruh atau menghubungkan syarikat
                        dengan sumber tempatan untuk membantu dan memperbaiki.
                    </p>
                    <h2>Membuat laporan awam</h2>
                    <p className="indent-margin">
                        Pihak berkepentingan boleh memainkan peranan penting
                        dalam mengkaji semula atau mengesahkan laporan dan memberi maklum balas.
                    </p>
                </div>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>Dengan kata-kata mereka sendiri:</strong>
                        {": "}
                    </h2>
                    <p>
                        &ldquo;Penglibatan pihak berkepentingan boleh didapati dalam pelbagai bentuk.
                        Ia boleh dimulakan oleh sebuah pertubuhan atau dimulakan sebagai tindak balas
                        oleh pertubuhan terhadap satu atau lebih pihak berkepentingan. Ia boleh berlaku
                        dalam perjumpaan tidak rasmi  atau rasmi dan boleh mengikuti pelbagai format
                        seperti pertemuan dengan orang perseorangan, persidangan, bengkel, pendengaran awam,
                        perbincangan meja bulat, jawatankuasa penasihat, prosedur perundingan dan maklumat yang
                        biasa dan teratur, perundingan bersama dan forum berasaskan web.
                        Penglibatan pihak berkepentingan harus interaktif dan bertujuan untuk membuka peluang
                        kepada pandangan pihak berkepentingan. Ciri pentingnya melibatkan  komunikasi dua hala.&rdquo;
                    </p>
                    <p>
                        <em>
                            Sumber: Pertubuhan Penstandardan Antarabangsa (ISO){" "}
                        </em>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.iso.org/standard/42546.html"
                            title="26000, Guidance on Social Responsibility"
                        >
                            26000, Guidance on Social Responsibility
                        </a>
                        <em>, 2010</em>.
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default ms;
