import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import hrm from "../../../../../images/hrm.jpg";
import panos from "../../../../../images/panos.jpg";
import Accordion from "../../../../../../components/Accordion";

const ms = () => {
    return (
        <StaticData>
            <h1>Maklumat Utama Berkaitan dengan Risiko dan Impak</h1>
            <div>
                <p>
                Berikutan kajian awal ini, syarikat harus melibatkan pihak berkepentingan yang relevan untuk mengumpul maklumat tambahan tentang risiko. Syarikat harus mendapatkan
                input dari pelbagai kumpulan, dan meletakkan proses yang menggalakkan komunikasi merentas bahasa dan mengatasi halangan lain.
            </p>
            <p>
                Mungkin terdapat situasi di mana rundingan dengan pihak berkepentingan tertentu mustahil, atau rundingan tidak membawa hasil yang diharapkan. Dalam hal ini, pakar-pakar
                dari institusi akademik, pakar runding mengenai tanggungjawab sosial korporat dan NGO boleh dilibatkan untuk membantu dalam penilaian risiko dan impak.
            </p>
            <p>
            Ada beberapa syarikat yang mengambil pendekatan “outsourcing” (mencari sumber luar) dalam mengumpul maklumat daripada pakar, seperti firma pakar runding, kumpulan masyarakat sivil,
            atau institusi akademik. Sekiranya anda sudah mempunyai hubungan yang erat dengan bekalan dan berusaha untuk menilai risiko yang wujud, laporan audit yang dikenakan  ke atas pembekal
            oleh syarikat lain atau kumpulan-kumpulan boleh memberikan data yang sangat berguna. Untuk mendapatkannya anda perlu menyertai kumpulan, seperti&nbsp;
            <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sedexglobal.com/"
                  title="Supplier Ethical Data Exchange (SEDEX)"
              >
            Pertukaran Data Pembekal Beretika (SEDEX)
             </a>
             *&nbsp;dan&nbsp;
             <a
                   target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.sedexglobal.com/"
                   title="Supplier Ethical Data Exchange (SEDEX)"
               >
               Gedung Penjelasan Adil untuk Kilang-kilang
               </a>
            *, yang menyediakan platform untuk berkongsi maklumat mengenai pembekal untuk berkongsi maklumat mengenai pembekal biasa dan bekerjasama untuk memantau dan memulihkan keadaan.
            </p>
            <p>
            Apabila laporan audit tidak wujud, ada cara lain untuk mengumpul maklumat mengenai pembekal biasa anda untuk memastikan yang mana satu boleh disasarkan untuk usaha pematuhan lanjut. Sama ada kesatuan sekerja
            wujud, rungut atau aduan di padang mungkin boleh menjadi sumber maklumat yang baik mengenai faktor risiko penderaan buruh. Apabila tiada kesatuan sekerja, para pembekal mungkin ada mekanisme keluhan atau aduan
            yang boleh menjadi tempat sumber maklumat. Pilihan lain, tentulah, membuat tinjauan ke atas semua pembekal dalam faktor risiko utama yang disenaraikan di atas.
            </p>
            <p>Apakah maklumat yang anda cari?</p> </div>
              <Accordion id="nature-prev-acc">
                   <Accordion.Section id="nature-prev-acc-description">
                                     <Accordion.Title>
                                     Alam semula jadi dan kebiasaan
                                 </Accordion.Title>
                                 <Accordion.Panel>

                                     <p className="indent-margin">
                                         Adakah buruh kanak-kanak, buruh paksa dan penderaan buruh yang lain diketahui atau dipercayai terdapat di kawasan anda (atau kawasan yang ada potensi) sebagai sumber?
                                         Apakah pekerjaan yang dibuat? Apakah penganiayaan yang didapati?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                                  <Accordion.Section id="root-causes-description">
                                         <Accordion.Title>
                                          Penyebab akar
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                         <p className="indent-margin">
                                             Sekiranya terdapat buruh kanak-kanak, buruh paksa dan penderaan buruh yang lain, apakah penyebab akarnya?
                                         </p>
                                     </Accordion.Panel>
                                 </Accordion.Section>

                               <Accordion.Section id="industry-structure-acc-description">
                                  <Accordion.Title>
                                  Struktur Industri
                                 </Accordion.Title>
                                 <Accordion.Panel>

                                     <p className="indent-margin">
                                         Bagaimanakah industri ini beroperasi di dalam negara? Adakah tempat bekerja formal atau tidak formal? Adakah hubungan pengambilan pekerjaan dirasmikan? Adakah elemen pengeluaran diberi
                                         kepada subkontraktor? Sekira ya, adakah sebahagian pengeluaran di hantar ke rumah?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>

                               <Accordion.Section id="labor-pop-acc-description">
                                  <Accordion.Title>
                                  Populasi Buruh
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                     <p className="indent-margin">
                                         Apakah sifat-sifat buruh dalam industri di kawasan ini? Adakah ia bergantung banyak kepada subkontraktor, buruh sementara dan/atau pekerja migran? Sekiranya ya, adakah pekerja ini biasanya
                                         bercakap dalam bahasa tempatan? Adakah pekerja kebanyakannya satu kumpulan jantina yang sama? Adakah mereka dalam kumpulan sebaya yang diambil bekerja?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>

                               <Accordion.Section id="industry-rel-description">
                                  <Accordion.Title>
                                  Perhubungan industri
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                     <p className="indent-margin">
                                     Adakah kerangka perundangan kebangsaan atau institusi wujud untuk menggalakkan hubungan industri yang berkesan dan untuk tawar-menawar secara kolektif? Adakah kesatuan sekerja yang berkesan wujud?
                                     Sekiranya tiada, adakah terdapat mekanisme lain untuk pekerja bersuara di tempat kerja mereka?
                                 </p>
                                 </Accordion.Panel>
                             </Accordion.Section>

                                    <Accordion.Section id="social-protection-description">
                                       <Accordion.Title>
                                      Perlindungan sosial
                                          </Accordion.Title>
                                          <Accordion.Panel>

                                          <p className="indent-margin">
                                                Adakah terdapat jaringan keselamatan sosial dalam negara untuk melindungi mereka yang mudah teraniaya - menyediakan, antara lain, akses kepada penjagaan kesihatan, keselamatan pendapatan untuk warga
                                                emas dan orang kurang upaya, manfaat untuk kanak-kanak, dan keselamatan pendapatan untuk yang menganggur dan pekerja berpendapatan rendah? Adakah terdapat institusi pendidikan yang mencukupi untuk
                                                mendidik kanak-kanak sehingga mereka mencapai umur bekerja yang sah?
                                            </p>
                                      </Accordion.Panel>
                                  </Accordion.Section>
                                        <Accordion.Section id="exist-init-org-description">
                                           <Accordion.Title>
                                         Keadaan Perundangan yang Sah dan Peraturan
                                              </Accordion.Title>
                                              <Accordion.Panel>

                                              <p>
                                                  Apakah undang-undang utama dan peraturan mengenai buruh kanak-kanak, buruh paksa dan isu buruh lain dalam negara/bidang kuasa? Adakah undang-undang-undang dan peraturan ini boleh dipakai oleh pekerja migran?
                                                  Apakah undang-undang yang wujud mengenai korporat yang bersekongkol dalam penganiayaan hak asasi manusia? Sejauh manakah undang-undang dikuatkuasa dan adakah bukti rasuah dikaitkan dengan kekurangan penguatkuasaan?
                                              </p>

                                          </Accordion.Panel>
                                      </Accordion.Section>
                                             <Accordion.Section id="market-data-description">
                                                <Accordion.Title>
                                               Pertubuhan dan inisiatif yang wujud
                                                   </Accordion.Title>
                                                   <Accordion.Panel>

                                                   <p className="indent-margin">
                                                     Apakah usaha yang diambil, dan oleh siapa, untuk memerangi penganiayaan buruh seperti buruh kanak-kanak dan buruh paksa dalam industri atau kawasan?
                                                   </p>
                                               </Accordion.Panel>
                                           </Accordion.Section>
                                           <Accordion.Section id="market-data-description">
                                                   <Accordion.Title>
                                                  Data Pasaran
                                                      </Accordion.Title>
                                                      <Accordion.Panel>

                                                      <p className="indent-margin">
                                                        Apakah kategori dengan perbelanjaan tinggi, seperti bahan mentah yang penting atau komponen penting, dalam operasi anda yang paling berisiko, dan akan memberi impak sangat besar sekiranya terdapat gangguan
                                                        bekalan? Adakah syarikat lain dalam industri anda mendedahkan maklumat senarai bekalan khusus atau maklumat yang boleh disertakan dalam penilaian risiko dan analisis?
                                                      </p>
                                                  </Accordion.Panel>
                                              </Accordion.Section>
                                           </Accordion>
                                           <p>
                                             Untuk merasai bagaimana pendekatan ini boleh dipakai dalam sektor tertentu,{" "}
                                             <a
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 href="http://www.responsiblesourcingtool.org/download/seafood/SF_Tool_04.pdf"
                                                 title="Responsible Sourcing Seafood Tool 4: Information Gathering and Risk Assessment in Seafood Supply Chains"
                                             >
                                                  Mencari Sumber Makanan Laut Secara Bertanggungjawab Alat 4: Mengumpul Maklumat dan Penilaian risiko dalam Rantai Bekalan Makanan Laut
                                             </a>{" "}
                                             mengambil pendekatan langkah-demi-langkah untuk memeriksa risiko berdasarkan negara, risiko rantai bekalan, risiko berdasarkan rantai, dan risiko berdasarkan pembekal.
                                         </p>
                                           <br />
                                           <ExampleInAction id="med_rep">
                                           <h2>
                                               <ExampleInAction.Icon alt="Lightbulb"/>
                                               <strong>
                                                   Contoh dalam Tindakan: Menangkap Ikan dan Makanan Laut
                                               </strong>
                                           </h2>
                                           <p>
                                           Buruh kanak-kanak dan buruh paksa digunakan untuk menangkap ikan dan memproses ikan dan makanan laut dalam pelbagai keadaan akuatik di seluruh dunia.  Kerja yang terpencil di
                                           perairan memberi cabaran kepada penguatkuasaan terhadap buruh kanak-kanak dan buruh paksa dalam industri perikanan dan makanan laut.&nbsp;
                                           <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
                                              title="United Nations Convention on the Law of the Sea"
                                          >
                                              Konvensyen Pertubuhan Bangsa-Bangsa Bersatu mengenai Undang-Undang Laut
                                          </a> merupakan instrumen antarabangsa utama dalam isu undang-undang maritim di laut.  Konvensyen ini membezakan di antara kawasan maritim — laut sempadan, Zon Ekonomi Eksklusif, dan laut dalam -
                                          dan keupayaan negara untuk mengawal aktiviti masing-masing.  Sempadan maritim merupakan lapisan tambahan yang kompleks dalam  menguatkuasakan undang-undang buruh ke atas bot nelayan.  Negara yang
                                          mengibarkan bendera pada bot nelayan bertanggungjawab untuk mengawal keadaan buruh dalam bot tersebut.  Bagaimanapun, sekiranya negara tertentu tidak mampu atau enggan menguatkuasakan undang-undang
                                          buruh ke atas bot-bot tempatan, para pekerja mudah dianiaya.  Kalau kapal-kapal mungkin tidak menukar bendera mereka dalam pelayaran, ada terdapat kapal mengguna bendera yang dipanggil bendera mudah pakai,
                                          atau mengguna bendera negara lain daripada bendera pemilik kapal, untuk mengelak dakwaan kewangan atau kawalan negara tersebut, juga untuk mengambil kesempatan menggunakan bendera negara yang menguntungkan
                                          mereka.  Penguatkuasaan, pendakwaan, dan usaha pemulangan lebih kompleks apabila kapal-kapal beroperasi dalam sempadan yang dalam bidang kuasa negara lain.
                                           </p>
                                           <p>
                                           Menangkap tanpa izin, tidak dilaporkan dan tanpa peraturan (IUU) semakin berleluasa.  Menangkap ikan secara IUU mengelak peraturan, merosakkan pengurusan perikanan, pemuliharaan, dan membahayakan bekalan makanan dunia.
                                           Ia menambah amalan mengeksploitasi buruh, yang mungkin membawa kesan negatif terhadap upah dan keadaan bekerja bagi para nelayan.  Menangkap ikan secara IUU juga boleh melibatkan buruh paksa dan pemerdagangan manusia,
                                           dan buruh kanak-kanak.  Kerajaan sedang meningkatkan usaha berkaitan menangkap ikan secara IUU.  Contohnya, peraturan Kesatuan Eropah untuk menamatkan aktiviti menangkap ikan secara IUU memerlukan negara yang mengeksport
                                           ikan ke EU, atau meminjamkan bendera mereka kepada bot nelayan yang mengimport ke EU, dan memenuhi standard ketat EU dalam pengurusan perikanan.  Sekiranya standard ini tidak dipatuhi, negara mungkin akan ‘diberi kad’,
                                           bermakna  mereka akhirnya akan dikecualikan daripada memasarkan ikan di pasaran EU.
                                           </p>
                                           <p>
                                            Kerajaan AS juga mengambil tindakan untuk menangani perikanan secara  IUU.  Pada 2019, Kongres Amerika Syarikat meluluskan Akta Maritim SAFE.  Undang-undang ini menubuhkan sekumpulan agensi yang bekerjasama untuk memberikan
                                            agensi-agensi persekutuan dengan kerangka bersama untuk melawan perikanan IUU dan memberi kuasa untuk pelbagai aktiviti agensi.  Aktiviti ini termasuk membina keupayaan penguatkuasaan undang-undang dan keselamatan pelabuhan,
                                            membaiki ketelusan dan pengesanan dalam rantai bekalan makanan laut, mempromosikan penggunaan teknologi untuk melawan perikanan secara IUU, dan menggalakkan pertukaran maklumat yang lebih baik di antara agensi-agensi dan pertubuhan lain.
                                           </p>
                                           <p>Sebelum Akta Maritim SAFE, satu Pasukan Petugas Presiden untuk Melawan Perikanan IUU, mengeluarkan&nbsp;
                                           <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                                              title="Action Plan for Implementing Task Force Recommendations"
                                          >
                                              Rancangan Tindakan untuk Melaksanakan Saranan Pasukan Petugas
                                          </a>
                                         , di mana Amerika Syarikat sedang membangunkan Program Pengesanan Makanan Laut.  Program pengesanan, dikenali sebagai{" "}
                                           <a
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 href="https://www.fisheries.noaa.gov/international/seafood-import-monitoring-program"
                                             >
                                           Program Memantau Import Makanan Laut
                                           </a>,
                                           atau SIMP, yang memerlukan pengimport AS dalam rekod untuk menyediakan dan melaporkan data utama - dari tangkapan ikan sehingga ke tahap masuk berdagang di AS - berkaitan tiga belas ikan yang diimport yang dikenal pasti sebagai perikanan
                                           IUU yang terjejas dan/atau terdapat penyelewengan makanan laut.  Pematuhan berkuatkuasa mulai akhir 2018.
                                           </p>
                                           <p>
                                           Sumber:&nbsp;
                                           <a
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 href="http://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
                                             >
                                           http://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf
                                           </a>.
                                           </p>
                                           <p>
                                           Sumber:&nbsp;
                                           <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                                            >
                                           https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf
                                           </a>.
                                           </p>
                                           <p>
                                          Sumber:&nbsp;
                                          <a
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               href="https://www.fisheries.noaa.gov/international/seafood-import-monitoring-program"
                                           >
                                           https://www.fisheries.noaa.gov/international/seafood-import-monitoring-program
                                           </a>.
                                           </p>
               </ExampleInAction> <br />
               <OwnWords>
                                          <h4>
                                              <OwnWords.Icon alt="Feedback"/> <strong>Dengan kata-kata mereka sendiri: Faktor Risiko Utama untuk Pencabulan Hak Buruh</strong>
                                          </h4>
                                          <p>
                                              Ada projek yang dibiayai oleh Perbadanan Kewangan Pembangunan Antarabangsa (DFC), yang mengambil tempat Perbadanan Pelaburan Swasta Luar Negeri (OPIC),
                                              diklasifikasikan sebagai “Pertimbangan Istimewa” berdasarkan penapisan berkaitan dengan faktor buruh.
                                              </p>
                                             <p> “Projek pertimbangan istimewa dianggap mempunyai potensi yang tinggi untuk risiko sosial yang berkaitan dengan penglibatan atau kesan ke atas Projek Orang yang Terlibat termasuk Pekerja.
                                             Projek boleh diklasifikasikan sebagai Pertimbangan Istimewa berdasarkan penilaian tentang kemungkinan adanya risiko sosial yang teruk, dan kaitannya dengan sebuah projek.</p>
                                              <p>Faktor risiko utama yang dipertimbangkan mungkin termasuk:
                                              <ul>
                                             <li> Industri atau sektor: industri atau sektor buruh intensif yang menunjukkan statistik lebih cenderung melanggar Hak Buruh.</li>
                                              <li>Kelemahan Rantau: projek di negara (i) dengan sejarah yang didokumenkan mengenai isu hak buruh, (ii) baru-baru ini mengalami konflik yang berkaitan dengan Projek Orang yang Terjejas ,
                                              atau (iii) dengan sistem pengawasan yang lemah atau tergugat.</li>
                                              <li>Kehadiran  kumpulan dianiaya: (I) Penggunaan atau bergantung kepada kumpulan besar sub-kontraktor, tidak mahir, sementara, dan/atau pekerja migran termasuk yang terdapat dalam rantai bekalan;
                                              (ii) risiko atau kesan projek yang jatuh secara tidak seimbang kepada Projek Orang yang Terjejas, kerana keadaan tidak menentu, mungkin miskin atau terdedah kepada keadaan berbahaya, (iii) sektor
                                              di mana terdapat risiko tinggi untuk penggunaan buruh paksa atau buruh kanak-kanak.</li>
                                             <li> Kesan buruk yang ketara: (I) projek yang dijangka akan memberi kesan buruk kepada sebilangan besar Pekerja, atau (ii) projek yang berdasarkan sifat atau jejak mereka boleh menyebabkan atau
                                             dijangka menyebabkan (atau terlibat dalam) kesan buruk Hak Asasi Manusia.”</li>
                                              </ul></p>
                                          <p>  Sumber: Perbadanan Kewangan Pembangunan Antarabangsa AS,&nbsp;
                                          <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf"
                                              title="Environmental and Social Policy Statement 2020."
                                          >
                                              Dasar Alam Sekitar dan Sosial dan Prosedur
                                          </a>, 2020 at{" "}
                                          <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf"
                                                title="Environmental and Social Policy Statement 2020."
                                            >
                                          https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf
                                          </a>
                                          </p>
                                 </OwnWords>
        </StaticData>
    );
};

export default ms;
