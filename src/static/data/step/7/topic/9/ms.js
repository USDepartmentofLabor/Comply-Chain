import React from "react";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Menangani Audit Data</h1>
                <p>
                    Mengaudit tiada banyak gunanya melainkan jika syarikat komited untuk menggunakan data audit untuk memperbaiki keadaan 
                    buruh dalam jangka masa panjang. Data audit harus dimasukkan ke dalam sistem pangkalan data yang membenarkan analisis 
                    menyeluruh bagi audit khusus, serta analisis data agregat ke atas setiap pembekal dan tempat kerja yang diaudit, ke 
                    atas setiap barisan produk, ke atas setiap jenis pencabulan, atau pematuhan di zon daerah, dan bentuk lain. 
                </p>
                <p>
                    Ada beberapa cabaran untuk mengekalkan audit pangkalan data yang berkesan.
                </p>
                <Accordion id="data-processing-acc">
                   <Accordion.Section id="data-processing-description">
                        <Accordion.Title>
                            Memproses Data 
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Pertama, sistem mesti mampu memproses data secara berkesan dari pelbagai pengaudit individu yang berbeza, 
                            termasuk pengaudit dalaman dan luar dan/atau data audit yang diterima dari industri atau audit kumpulan pelbagai 
                            industri. Kalau alat audit anda terdapat di atas kertas, pengaudit anda atau kakitangan mesti dilatih untuk 
                            memuatkan data seragam ke dalam sistem. (Ada syarikat yang mengambil sub-kontraktor untuk membersihkan data audit.) 
                            Sekiranya syarikat juga menerima data dari pemantau bebas, anda patut memuatkan data tersebut juga.&nbsp;
                        </p>
                        <p>
                            Latihan lebih-lebih lagi penting sekiranya anda membenarkan sesiapa yang sedang diaudit untuk memuatkan maklumat bagi 
                            menilai diri sendiri. Ada pemohon yang tidak tahu atau tidak mempunyai banyak pengalaman dalam pangkalan data dan amat 
                            penting mengajar mereka bagaimana memuatkan maklumat bagi memastikan integriti data.
                        </p>
                        <p>
                            Sebelum berfikir untuk melatih pengaudit dan penilai sendiri, anda harus fokus kepada rekaan pangkalan data. Pangkalan 
                            data yang direka bentuk dengan baik boleh membantu memastikan integriti data dengan membuatkan mudah bagi pengguna 
                            memuatkan data dalam format yang betul. Pangkalan data yang dibuat khas dengan reka bentuk logikal bermakna bahawa 
                            syarikat cuma mendapat maklumat yang ia perlukan dan data ini berguna dan boleh dibuat analisis. Mana-mana syarikat, 
                            tidak kira saiz, boleh mengurangkan data yang silap dengan memulakan dengan pangkalan data yang baik. Tambahan, 
                            pemeriksaan integriti data boleh dibuat secara automatik dengan beberapa program perisian yang mudah didapati.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                 {/* </Accordion>
                                 <Accordion id="systems-integration-acc"> */}
                <Accordion.Section id="systems-integration-description">
                    <Accordion.Title>
                        Gabungan dengan Sistem Informasi Lain 
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Cabaran yang kedua ialah gabungan Pangkalan data mestilah digabungkan dengan sistem informasi yang menjejak program 
                        pematuhan sosial yang lain, seperti senarai pembekal, latihan pembekal, dan data pembinaan keupayaan, pemulihan, dan 
                        maklumat pengesahan bebas. Kedua, ia mesti digabungkan dengan fungsi lain dalam syarikat, terutamanya mendapatkan 
                        sumber, supaya data pematuhan sosial digunakan secara berkesan dengan unit perniagaan yang lain. Gabungan bermaksud 
                        bahawa sesuatu jabatan yang mencari sumber memesan daripada pembekal yang mempunyai prestasi tinggi dalam audit sosial. 
                    </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="using-data-acc"> */}
                <Accordion.Section id="using-data-description">
                    <Accordion.Title>
                        Menggunakan Data
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Cabaran ketiga ialah menetapkan proses yang jelas bagi penggunaan data. Pengaudit harus periksa pangkalan data ketika 
                        menyediakan audit, melihat latar belakang audit tempat kerja yang khusus dan juga jenis pencabulan yang biasa di lokasi 
                        dan/atau jenis produk. Pasukan pematuhan sosial harus ada proses jelas untuk menganalisa data dari audit khusus dan juga 
                        menjejak bentuk semua audit. 

                    </p>
                    <p>
                        Sekiranya terdapat pencabulan di tempat kerja, patut ada proses untuk menjejak pemulihan pembekal. Pasukan patut memerhatikan 
                        corak pencabulan dalam barisan produk yang khusus, terutamanya kawasan, pencabulan yang berkaitan dengan pembekal/pengurusan 
                        dan isu-isu lain. Apabila sesuatu corak dikesan, audit yang dijadualkan harus beralih kepada jenis tempat kerja yang 
                        menunjukkan kemungkinan risiko. Pasukan harus sediakan pemeriksaan untuk mengenal pasti “pihak luar” dan sahkan ketepatan 
                        data.&nbsp;
                    </p>
                    <p>
                        Ada terdapat masa di mana audit data menunjukkan pencabulan yang serius, dan kadang kala terdapat pembekal khusus yang 
                        terus mencabul kod walaupun audit dan usaha pemulihan dilakukan berkali-kali. Syarikat perniagaan akan perlu memastikan bila 
                        hendak meneruskan pemulihan, dan bila untuk menghentikan hubungan perniagaan dengan pembekal yang khusus. Ada syarikat yang 
                        mempunyai dasar &ldquo;tidak boleh tolak ansur&ldquo; berkaitan dengan pencabulan tertentu, selalunya yang melibatkan buruh 
                        kanak-kanak atau buruh paksa, di mana mereka akan segera menghentikan atau menggantung hubungan dengan pembekal tersebut. 
                        Yang lain meneruskan pemulihan untuk masa terhad atau mencapai sasaran khusus, tetapi kalau pembekal tidak menunjukkan 
                        pembaikan, syarikat menghentikan hubungan. Apabila menghentikan hubungan perniagaan dengan pembekal, syarikat harus 
                        sentiasa beringat impak penghentian kepada pekerja.
                    </p>

                    </Accordion.Panel>
                </Accordion.Section>
                </Accordion>
                <p>
                    <em>
                    *Catatan: Rujukan kepada syarikat tertentu dan entiti bukan kerajaan dalam panduan ini hanya untuk tujuan memberi maklumat bagi 
                    menunjukkan amalan terbaik yang telah diperakui di peringkat antarabangsa, sejak aplikasi dikeluarkan. Merujuk kepada entiti 
                    tidak patut ditafsirkan sebagai sokongan rasmi kepada entiti tersebut, produk atau perkhidmatan mereka oleh Jabatan Buruh AS 
                    dan penyertaan mereka tidak boleh ditafsirkan sebagai tinjauan komprehensif mengenai amalan entiti ini di dalam semua bidang.
                    </em>
                </p>
            </div>
        </StaticData>
    );
};

export default ms;
