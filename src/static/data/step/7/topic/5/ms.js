import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Langkah dalam Audit</h1>
                <p>
                    Audit biasanya mengandungi beberapa langkah, seperti berikut.
                </p>
                 <Accordion id="worksite-travel-acc">
                    <Accordion.Section id="worksite-travel-description">
                        <Accordion.Title>
                            Ketibaan di tempat kerja
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Amalan syarikat berbeza dari segi tempat kerja diberi notis terlebih dahulu mengenai audit (&ldquo;audit yang 
                            diumumkan&ldquo;). Bagaimanapun, amalan terbaik dalam hal ini ialah audit <strong>yang tidak diumumkan</strong>. 
                            Tiada siapa di tempat kerja patut diberitahu terdahulu bahawa pasukan audit akan melawat pada hari tertentu.
                        </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                 {/* </Accordion>
                  <Accordion id="mgmt-meeting-acc"> */}
                    <Accordion.Section id="mgmt-meeting-description">
                       <Accordion.Title>
                            Memulakan mesyuarat dengan pihak pengurusan 
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Tujuan memulakan mesyuarat ialah untuk menjelaskan proses audit kepada pengurus tempat kerja, termasuk bahagian 
                            di mana pihak pengurusan diminta atau tidak diminta terlibat. Ini juga masa untuk pasukan meminta dokumentasi 
                            yang diperlukan untuk audit; pihak pengurusan mungkin perlu sedikit masa untuk mengumpulkan dokumen selepas mesyuarat. 
                        </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                  {/* </Accordion>
                  <Accordion id="site-walk-through-acc"> */}
                    <Accordion.Section id="site-walk-through-description">
                        <Accordion.Title>
                            Melawat tempat kerja
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Tujuan melawat tempat kerja ialah untuk memerhati keadaan dalam kilang dan lokasi yang berkaitan seperti kafeteria 
                            dan asrama. Ini memberi peluang kepada pasukan audit untuk merasakan sekiranya ada isu pematuhan sosial yang 
                            membimbangkan; contohnya, pengaudit mungkin memerhatikan bahawa para pekerja nampak muda, dan mungkin bawah umur 
                            minimum. Pasukan patut memerhati, tetapi tidak mengganggu, aliran pekerjaan di dalam kilang. Pengaudit mungkin 
                            hendak bercakap dengan pekerja sebentar, tetapi tidak dengan cara yang boleh mengganggu kerja mereka atau memberi 
                            masalah kepada pekerja tersebut. Lawatan tersebut juga masa yang baik untuk memeriksa alat keselamatan, jalan keluar, 
                            dan sistem untuk mengukur masa bekerja. 
                        </p>
                    <OwnWords>
                        <h3>
                            <OwnWords.Icon alt="Feedback"/>{" "}
                            <strong>
                                Dengan kata-kata mereka sendiri: Cabaran Mengesahkan Umur 
                            </strong>
                        </h3>
                        <p>
                            &ldquo;Untuk mengesahkan umur pekerja, &ldquo;majikan patut menyimpan atau menyediakan daftar untuk 
                            pihak berkenaan atau dokumen lain yang menunjukkan nama dan umur atau tarikh lahir, disahkan bila mungkin, 
                            bukan sahaja kanak-kanak atau orang muda yang diambil bekerja tetapi juga yang menerima orientasi vokasional atau 
                            latihan yang diberikan.&rdquo;
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_DOC_ENT_HLP_CHL_FAQ_EN/lang--en/index.htm#F4"
                                title="Convention No. 138 (1973)"
                            >
                                [1]&nbsp;
                            </a>
                        </p>
                        <p>
                            Apabila tiada surat beranak menunjukkan umur atau dokumen palsu mudah didapati, saranan berikut mungkin berguna:
                        </p>
                        <ul>
                            <li>
                                pemeriksaan perubatan sebelum penggajian boleh menunjukkan umur sebenar seseorang dan juga sahkan kecenderungan 
                                jasmani seseorang untuk bekerja. Kita mesti prihatin dan menghormati hak peribadi seseorang.
                            </li>
                            <li>
                                memeriksa dokumen yang bertulis dengan merujuk dokumen lain serta afidavit boleh mengenal pasti dokumen palsu. 
                            </li>
                            <li>
                                majikan boleh mengadakan temuduga dengan pekerja dan pemohon yang nampak bawah umur minimum yang diperlukan bekerja 
                                bagi mendapat maklumat lanjut.
                            </li>
                            <li>
                                sijil mendaftar masuk sekolah boleh menjadi sumber baik untuk maklumat.
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_DOC_ENT_HLP_CHL_FAQ_EN/lang--en/index.htm#F5"
                                    title="Eliminating Child Labour: Guides for Employers"
                                >
                                    [2]&nbsp;
                                </a>
                            </li>
                        </ul>
                        <p>
                            Penunjuk tempatan juga berguna di negara di mana pekerja tidak tahu dengan tepat tahun lahir mereka. Contohnya, di beberapa 
                            negara Asia, kanak-kanak tidak tahu dengan tepat tarikh lahir mereka tetapi mereka tahu tahun binatang mereka (Tahun Monyet, 
                            dll.) Seseorang mungkin tahu tahun lahir mereka berlaku pada peristiwa penting dalam sejarah, seperti tahun kemerdekaan 
                            atau permulaan atau akhir perang, atau pada ulang tahun yang penting. Anda mungkin ingin memeriksa apakah peristiwa 
                            tempatan atau cara menanda waktu di negara di mana anda beroperasi yang anda boleh gunakan dalam temuduga dengan pekerja 
                            sekiranya sangsi tentang umur mereka. 
                        </p>
                        <p>
                        [1] Sila lihat, Artikel 9(3) of&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138"
                        >
                        Convention No.  138 (1973)
                        </a>
                        , mengenai tanggungjawab majikan untuk menyimpan daftar pekerja bawah umur 18.
                        </p>
                        <p>
                        [2] Sila lihat,&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="www.ilo.org/jakarta/whatwedo/publications/WCMS_151355/lang--en/index.htm"
                        >
                        Eliminating Child Labour: Guides for Employers
                        </a>
                        , ILO, Geneva, 2007.
                        </p>
                        <p>
                        Sumber: Dipetik dari Meja Bantuan Perniagaan ILO,&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_DOC_ENT_HLP_CHL_FAQ_EN/lang--en/index.htm"
                        >
                        Q&As on Business and Child Labor
                        </a>
                        , diakses Mei 11, 2017.
                        </p>
                        </OwnWords>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="worker-interview-acc"> */}
                <Accordion.Section id="worker-interview-description">
                    <Accordion.Title>
                        Temuduga Pekerja
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Pasukan mesti memilih keratan lintang untuk ditemu duga. Pekerja yang dipilih harus mewakili pelbagai jenis orang 
                        di tempat kerja, dan termasuk (bila digunakan) lelaki dan wanita, pekerja migran, pekerja dari pelbagai waktu 
                        kerja, pekerja yang menjalankan pelbagai tugas, ahli dari pelbagai pasukan pengeluaran, dll. Kalau mereka orang-orang 
                        muda di tempat kerja, kumpulan dengan wakil menggunakan teknik temuduga yang sensitif kepada umur pekerja.
                    </p>
                    <p>
                        Temu duga boleh diadakan secara individu atau berkumpulan, dan biasanya dilakukan di dalam dan di luar tempat kerja. 
                        Terutama di dalam kes di mana ada tanda terdapat pencabulan buruk di mana pekerja mungkin teragak-agak untuk berbincang 
                        pada waktu kerja, pengaudit mungkin perlu meluangkan masa untuk bercakap dengan pekerja di luar waktu kerja dan jauh 
                        dari tempat kerja. Pengaudit harus menggunakan alat audit bagi memastikan mereka bertanya pekerja soalan yang komprehensif. 
                        Mereka juga perlu mengumpulkan salinan slip gaji dari pekerja untuk membuat perbandingan dengan rekod bayaran yang 
                        disediakan oleh pihak pengurusan.
                    </p>
                    <p>
                        Temu duga juga menyediakan pekerja peluang untuk menyuarakan kebimbangan yang mereka mungkin ada. Pekerja harus 
                        dipastikan bahawa semua jawapan adalah sulit dan tidak akan dikongsi dengan pihak pengurusan. Kontrak anda dengan 
                        pembekal patut mempunyai klausa mengenai tiada balas dendam terhadap pekerja kerana terlibat dalam audit; penglibatan 
                        dalam audit patut memberikan pekerja perlindungan seperti mekanisme rungutan yang lain. 
                    </p>
                    <p>
                        Kalau kesatuan sekerja wujud dalam tempat kerja, wakilnya patut ditemuduga. Sekiranya tiada kesatuan sekerja atau wakil 
                        pertubuhan lain, pengaudit harus cuba menemui kumpulan yang membela pekerja tempatan. Pertubuhan masyarakat sivil, 
                        terutama mereka yang terlibat dalam usaha membela pekerja juga boleh bekerjasama dalam memberi maklumat dalam konteks 
                        menangani keadaan buruh di sesuatu tempat.
                    </p>
                    <p>
                    Alat Mendapatkan Sumber Secara Bertanggungjawab mengandungi alat,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/workerinterviews"
                            title="Conducting Migrant Worker Interviews"
                        >
                            Migrant Worker Interviews
                        </a>
                        , yang menyediakan contoh soalan temuduga untuk digunakan bila menemu duga pekerja migran dan pekerja kontrak asing yang 
                        disasarkan. Syarikat boleh menggunakan alat untuk membentuk soalan temu duga pekerja dengan matlamat untuk mengenal pasti 
                        ada kemungkinan kes penderaan atau pemerdagangan oleh perekrut di tempat kerja, perniagaan, pembekal dan sub-kontraktor.
                    </p>
                    <OwnWords>
                    <h3>
                        <OwnWords.Icon alt="Feedback"/>{" "}
                        <strong>
                            Dengan kata-kata mereka sendiri: Menemu duga Kanak-kanak 
                        </strong>
                    </h3>
                    <p>
                        <em>
                            &ldquo;Menemu duga seorang kanak-kanak penting dalam merekrut orang muda: a) meneka umur mereka, b) menilai kematangan 
                            mereka berkaitan dengan kerja apa yang mereka boleh jalankan, c) kemungkinan mempunyai pengalaman pekerjaan dan/atau d) 
                            kalau salah seorang pekerja dikenal pasti bawah umur untuk jenis/proses kerja yang dijalankan oleh kanak-kanak atau 
                            orang muda tersebut. 
                        </em>
                    </p>
                    <p>
                        <em>
                            Apabila menemu duga seorang kanak-kanak yang anda syak di bawah umur minimum untuk sesuatu pekerjaan atau di mana 
                            kanak-kanak tersebut terlibat dalam kerja berbahaya, sangat penting untuk membuat keadaan yang boleh dipercayai dan tenteram. 
                            Juga penting perbualan dalam keadaan tanpa gangguan tetapi di tempat yang tidak terlalu terpencil atau tersembunyi. Yang 
                            penting, kanak-kanak itu merasa selamat sebaik mungkin
                        </em>
                    </p>
                    <h2>
                        <em>Apa yang patut Diperhatikan?</em>
                    </h2>
                    <ul>
                        <li>
                            Kanak-kanak mesti dilayan dengan penuh hormat dan dianggap sebagai individu yang mempunyai haknya sendiri.
                        </li>
                        <li>
                            Dua orang dewasa mesti sentiasa hadir di tempat temu duga. Orang dewasa tidak patut menghabiskan terlalu banyak 
                            masa bersendirian dengan kanak-kanak dan menyebabkan kanak-kanak tersebut berasa bimbang dan juga menyebabkan 
                            rasa syak akan terjadi kelakuan yang mengancam atau mendera.
                        </li>
                        <li>
                            Apabila menemu duga seorang gadis, mesti sentiasa ada seorang wanita yang hadir.
                        </li>
                        <li>
                            Dinasihatkan  menjemput ibu bapa anak gadis tersebut waktu temu duga
                        </li>
                        <li>
                            Sekiranya kanak-kanak itu anak yatim piatu tanpa penjaga atau saudara mara, wakil NGO untuk hak kanak-kanak 
                            boleh dijemput. 
                        </li>
                    </ul>
                    <h2>
                        <em>Waktu Menemuduga Kanak-Kanak</em>
                    </h2>
                    <ul>
                        <li>
                            Matlamat utama temu duga tersebut ialah untuk mendengar pandangan kanak-kanak tersebut dan cuba membuat penilaian 
                            keseluruhan tentang keluarga dan keadaan kerjanya.
                        </li>
                        <li>
                            Sebab mengapa kanak-kanak itu bekerja.
                        </li>
                        <li>
                            Bagaimanakah kanak-kanak itu menyumbangkan kepada pendapatan keluarga dan apakah keadaan keluarga (contohnya, 
                            pengangguran, penyakit berjangkit dll.)?
                        </li>
                        <li>
                            Bagaimanakah kanak-kanak itu memahami dan menghargai pekerjaannya?
                        </li>
                    </ul>
                    <p>
                        Sumber: Save the Children Denmark,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.etiskhandel.no/noop/file.php?id=1580"
                            title="Child Labour Toolkit, Responsible Approaches to Child Labour in the Textile and Garment Industry"
                        >
                            Child Labour Toolkit, Responsible Approaches to Child
                            Labour in the Textile and Garment Industry
                        </a>
                        , 2006.
                    </p>
                         
                         {/* <p>
                             [1] See, Article 9(3) of&nbsp;
                             <a
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138"
                                 title="Convention No. 138 (1973)"
                             >
                                 Convention No. 138 (1973)
                             </a>
                             , concerning the employers&rsquo; obligation to keep
                             registers of young workers under 18.
                             <br /> [2] See,&nbsp;
                             <a
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 href="http://www.ilo.org/jakarta/whatwedo/publications/WCMS_151355/lang--en/index.htm"
                                 title="Eliminating Child Labour: Guides for Employers"
                             >
                                 Eliminating Child Labour: Guides for Employers&nbsp;
                             </a>
                             , ILO, Geneva, 2007.
                         </p>
                         <p>
                             Source: Excerpted from the ILO Helpdesk for Business,{" "}
                             <a
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 href="http://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_DOC_ENT_HLP_CHL_FAQ_EN/lang--en/index.htm"
                                 title="As on Business and Child Labor"
                             >
                                 <em>Q&amp;As on Business and Child Labor</em>
                             </a>
                             <em>, accessed May 11, 2017.</em>
                         </p> */}
                    </OwnWords>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="mgmnt-interview-acc"> */}
                <Accordion.Section id="mgmnt-interview-description">
                    <Accordion.Title>
                        Temu duga Pengurusan 
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Temu duga Pengurusan menyediakan peluang untuk menyokong atau mencari percanggahan maklumat yang dikumpul melalui 
                            temu duga pekerja. Pasukan patut menemu duga keratan lintang pengurusan termasuk kakitangan sumber manusia, penyelia 
                            pengeluaran dan lain-lain. Alat audit diguna untuk memastikan pengurus yang ditanya soalan komprehensif. 
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="broker-interview-acc"> */}
                <Accordion.Section id="broker-interview-description">
                    <Accordion.Title>
                        Temu duga broker buruh dan perekrut 
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Mendapat akses kepada perekrut atau broker untuk temu duga boleh menjadi cabaran, dan mungkin memerlukan koordinasi dan 
                        kerjasama pembekal. Verit&eacute;&rsquo;s{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://helpwanted.verite.org/helpwanted/toolkit"
                            title="Fair Hiring Toolkit"
                        >
                            Fair Hiring Toolkit
                        </a>{" "}
                        termasuk{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://helpwanted.verite.org/helpwanted/toolkit/suppliers/managing-labor-recruiters"
                            title="sample interview questions for labor recruiters"
                        >
                            sample interview questions for labor recruiters
                        </a>{" "}
                        yang direka untuk kegunaan pengaudit sosial syarikat. 
                    </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="doc-review-acc"> */}
                <Accordion.Section id="doc-review-description">
                    <Accordion.Title>
                        Menyemak Semula Dokumentasi
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Tujuan menyemak semula dokumentasi ialah memberi bukti nyata pematuhan dan untuk sama ada menyokong atau mencari 
                            percanggahan dalam mengumpul maklumat yang dikumpul melalui pekerja dan temu duga pengurusan. Jenis dokumen yang 
                            disemak semula termasuk:
                        </p>
                        <ul>
                            <li>Prosedur pengesahan dan dokumen</li>
                            <li>Senarai utama pekerja kanak-kanak </li>
                            <li>Pemilihan dan prosedur merekrut </li>
                            <li>Kontrak dengan broker buruh</li>
                            <li>Kontrak pekerja/perjanjian penggajian</li>
                            <li>
                                Dokumen peribadi pekerja yang mungkin disimpan oleh majikan
                            </li>
                            <li>Pengenalan program dan bahan-bahan</li>
                            <li>Fail kakitangan</li>
                            <li>
                                Komunikasi pekerja dan pelan latihan—persijilan yang termasuk tetapi tidak terhad kepada latihan kemahiran, persediaan 
                                pekerja, program persijilan kerajaan, orientasi sistem/dasar
                            </li>
                            <li>
                                Perjanjian tawar-menawar kolektif, termasuk persijilan kesatuan sekerja, peranan kesatuan sekerja dan minit mesyuarat
                            </li>
                            <li>
                                Kontrak dengan dan skop tanggungjawab agensi keselamatan
                            </li>
                            <li>Bayaran gaji dan rekod waktu kerja</li>
                            <li>Laporan keupayaan pengeluaran</li>
                            <li>
                                Dasar sumber manusia bertulis dan prosedur
                            </li>
                            <li>
                                Pelan kesihatan dan keselamatan di tempat pekerjaan dan rekod termasuk permit sah, rekod penyelenggaraan dan pemantauan, 
                                laporan kecederaan/kemalangan, prosedur penyiasatan, inventori kimia, inventori alat perlindungan peribadi, sijil latihan 
                                dan pelan pemindahan.
                            </li>
                            <li>Notis Disiplin</li>
                            <li>Laporan Rungutan</li>
                            <li>Penilaian Prestasi</li>
                            <li>Kenaikan pangkat dan/atau gaji berdasarkan merit</li>
                            <li>Rekod Pembuangan kerja dan penggantungan</li>
                            <li>Rekod pekerja yang telah berhenti</li>
                            <li>Slip gaji pekerja</li>
                        </ul>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                                <Accordion id="closing-meeting-acc"> */}
                <Accordion.Section id="closing-meeting-description">
                    <Accordion.Title>
                        Urusan Mesyuarat Penutup 
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Mesyuarat penutup ialah waktu untuk melapor kepada pengurusan mana-mana pencabulan kod yang terdapat di tempat 
                        kerja. Ada syarikat yang menggunakan mesyuarat penutup sebagai masa untuk meminta saranan dari pihak pengurusan 
                        untuk mengurangkan masalah atau bekerjasama dengan pengurusan dalam pelan tindakan pembetulan (CAP). Syarikat 
                        lain pula menggunakan mesyuarat penutup sebagai masa untuk membincangkan isu dengan pihak pengurusan, tetapi 
                        membentuk CAP yang formal selepas audit selesai dan pasukan yang lengkap akan menyemak semula laporan audit 
                        tersebut.
                    </p>
                    </Accordion.Panel>
                </Accordion.Section>
                                {/* </Accordion>
                                <Accordion id="report-prep-acc"> */}
                <Accordion.Section id="report-prep-description">
                    <Accordion.Title>
                        Menyediakan Laporan
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Pasukan audit menyediakan laporan audit yang lengkap.
                        </p>
                        <p>
                            Panjangnya laporan bergantung kepada saiz tempat kerja. Kebanyakan audit mengambil masa satu atau dua hari, 
                            tetapi boleh, dan syarikat patut melabur untuk audit lebih panjang sekiranya tempat kerja dan jumlah pekerja 
                            ramai dan/atau banyak pencabulan berlaku dan perlu masa untuk menyiasat. Audit yang dicetuskan oleh rungutan 
                            atau aduan dari orang dalam boleh mengambil lebih masa untuk disiasat terutamanya kalau ia memerlukan campur 
                            tangan dari pihak penguatkuasa.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
            </div>
        </StaticData>
    );
};

export default ms;
