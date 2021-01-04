import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";
import apsca from "../../../../../../static/images/apsca.jpg";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Pasukan Audit</h1>
                <h2>Kakitangan</h2>
                <p>
                    Pasukan pematuhan sosial anda terdiri daripada staf pematuhan sosial di ibu pejabat, dan juga kakitangan 
                    di padang menyelaras dan/atau menjalankan audit. Untuk syarikat dengan program audit dalaman, anggota 
                    pasukan audit adalah pekerja syarikat; untuk syarikat yang menggunakan pengaudit luar, anggota pasukan 
                    audit terdiri daripada pengaudit yang diambil dari entiti luar (sama ada firma yang meraih keuntungan 
                    atau firma tidak mencari keuntungan). Ada syarikat yang menggunakan pengaudit dalam dan luar, bergantung 
                    kepada sektor atau lokasi tempat kerja.
                </p>
                <p>
                    Ketiga-tiga pendekatan di bawah boleh diharapkan dan dipercayai, asalkan mereka diurus dengan baik oleh 
                    pasukan pematuhan sosial anda dan beroperasi dalam kerangka program pematuhan sosial yang komprehensif. 
                    Bagaimanapun, setiap pendekatan ada baik dan buruknya. 
                </p>
                 <Accordion id="int-auditors-acc">
                    <Accordion.Section id="int-auditors-description">
                        <Accordion.Title>
                            Pengaudit Dalaman
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Pengaudit dalaman adalah kakitangan syarikat yang telah dilatih dalam kepakaran dan kecekapan audit 
                            sosial. Satu kebaikan mengguna pengaudit dalaman ialah lebih mudah untuk berkomunikasi; contohnya, 
                            kalau ada perubahan dasar; lebih mudah untuk memastikan persamaan di kalangan kakitangan sendiri 
                            daripada mengambil pengaudit luar. Pengaudit dalaman juga mempunyai fahaman lebih mendalam mengenai 
                            program pematuhan sosial syarikat dan boleh memberi sumbangan yang lebih daripada audit. Pun begitu, 
                            oleh kerana pengaudit dalaman adalah kakitangan syarikat, ada pihak berkepentingan yang mungkin akan 
                            menyoal kebolehpercayaan hasil kajian mereka. 
                        </p>
                      </Accordion.Panel>
                  </Accordion.Section>
                  {/* </Accordion>

                  <Accordion id="ext-auditors-acc"> */}
                      <Accordion.Section id="ext-auditors-description">
                         <Accordion.Title>
                            Pengaudit Luar
                        </Accordion.Title>
                        <Accordion.Panel>

                        <p className="indent-margin">
                            Pengaudit luar adalah pengaudit profesional dengan kepakaran dan kecekapan, diambil bekerja oleh firma audit 
                            sosial di luar syarikat. Mereka tenaga kerja fleksibel dan mungkin terdapat di kawasan di mana tidak berbaloi 
                            bagi syarikat untuk mengekalkan pengaudit dalaman. Oleh kerana pengaudit luar dibayar oleh syarikat untuk 
                            menjalankan audit, ada pihak berkepentingan yang mungkin sangsi dan mungkin tidak percaya akan hasil kajian 
                            mereka. Tambahan pula, beberapa kumpulan audit luar mungkin mempunyai sistem yang sukar untuk diubahsuai dan 
                            padankan dengan protokol atau parameter syarikat. Perniagaan yang bergantung kepada pihak bebas atau pihak 
                            ketiga untuk sama ada menjalankan atau mengesahkan audit sendiri mesti juga mempertimbangkan entiti yang 
                            menjalankan audit. Pihak ketiga, status pengaudit bebas tidak menjamin tiada risiko. 
                        </p>
                    </Accordion.Panel>
                    </Accordion.Section>
                    {/* </Accordion>
                        <Accordion id="independent-auditors-acc"> */}
                        <Accordion.Section id="independent-auditors-description">
                            <Accordion.Title>
                                Pengaudit bebas/pemantau
                            </Accordion.Title>
                            <Accordion.Panel>

                            <p className="indent-margin">
                                Pengaudit bebas/pemantau adalah pengaudit profesional yang diakui oleh pertubuhan atau mekanisme, seperti 
                                organisasi perdagangan atau profesional; peranan mereka ialah memastikan yang audit dijalankan sambil 
                                menghapuskan transaksi kewangan secara langsung di antara syarikat dan pengaudit. Biasanya, syarikat membayar 
                                pertubuhan bebas yang berasingan untuk perkhidmatan audit, dan/atau untuk menjadi anggota badan tersebut. 
                                Institusi itu memperakui pengaudit di bawah standard yang ditetapkan dan bertanggungjawab untuk membuat jadual 
                                dan mengawas semua audit. Sementara ini bertujuan untuk meningkatkan kebolehpercayaan audit tersebut, dalam 
                                beberapa sektor atau kawasan, perkhidmatan ini mungkin tidak wujud. Tambahan pula, walaupun tanpa transaksi 
                                kewangan secara langsung, ada pihak berkepentingan yang mungkin bimbang sejauh mana pengaudit itu bebas 
                                daripada entiti yang diaudit. Pelbagai tahap kebebasan wujud, dan kebebasan akhirnya perlu diukur bergantung 
                                kepada setiap kes. 
                            </p>
                            <p>
                                Sekiranya syarikat memilih untuk menggunakan pengaudit dalam atau luar, mungkin perlu untuk melibatkan entiti 
                                bebas untuk memainkan peranan dalam sistem pematuhan sosial sekiranya mereka ingin meningkatkan keberkesanan 
                                dan kebolehpercayaan ke tahap maksimum. Sila lihat{" "}
                                  <Link to="/steps/9">Langkah 7, Kaji Semula Secara Bebas</Link> untuk perbincangan lebih luas mengenai pemantauan
                                  bebas dan pengesahan. 
                            </p>
                          </Accordion.Panel>
                      </Accordion.Section>
                      </Accordion>
                <h2>Kecekapan Pengaudit</h2>
                <p>
                    Sama ada dalaman, luar atau bebas, semua pengaudit mesti mempunyai kemahiran khusus dan pengetahuan untuk menjalankan 
                    audit secara berkesan. Sejak kebelakangan ini, beberapa organisasi telah berusaha untuk menulis secara formal dan 
                    mendokumenkan kemahiran standard dan pengetahuan seseorang pengaudit mesti miliki. Contohnya,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.theapsca.org/"
                        title="Association of Professional Social Compliance Auditors (APSCA)"
                    >
                        Persatuan Pengaudit Pematuhan Sosial Profesyenal (APSCA)
                    </a>{" "}
                    ialah badan yang terdiri dari anggota profesional yang berusaha untuk menubuhkan proses persijilan untuk pengaudit pematuhan 
                    sosial. Pengetahuan yang diperlukan termasuk pemahaman terperinci mengenai standard buruh antarabangsa, persekitaran 
                    pengeluaran industri dan proses, budaya tempatan dan bahasa.
                </p>
                <p>
                    Penting bagi pengaudit dilatih dalam protokol khusus untuk menangani situasi sensitif yang melibatkan mangsa kanak-kanak 
                    dan/atau dewasa yang dieksploitasi dengan kejam. Pengaudit harus bersedia untuk berinteraksi dengan kanak-kanak dan 
                    mengambil langkah bagi pihak kanak-kanak yang berumur wajar. Firma audit juga harus mempunyai prosedur bagi memastikan 
                    yang mangsa buruh kanak-kanak atau buruh paksa menerima rawatan segera dan perkhidmatan dari individu yang berkelayakan 
                    atau organisasi.
                </p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Contoh dalam Tindakan: Persatuan Pengaudit Pematuhan Sosial Profesional  (APSCA)* Kerangka Kecekapan
                    </h3>
                    <p>
                        {""}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.theapsca.com/"
                            title="APSCA"
                        >
                            APSCA
                        </a>{" "}
                        tanda Pengaudit Pematuhan Sosial yang Bertauliah (Certified Social Compliance Auditor - CSCA) bermakna seseorang individu 
                        itu telah menunjukkan pengalaman khusus, pengetahuan dan kemahiran dalam bidang mengaudit pematuhan sosial. Melalui proses 
                        persijilan yang tegas—termasuk pengalaman, pendidikan, peperiksaan dan penilaian—calon CSCA mesti menunjukkan kecekapan 
                        teras yang relevan kepada profesion tersebut. Berikut ialah kerangka kecekapan APSCA’ seperti terlihat dalam kemahiran 
                        asas dan bidang pengetahuan praktikal. 
                    </p>
                    <br />
                    <img
                    src={apsca} 
                    />
                    <br />
                        
                    <p>
                        Sumber: APSCA, Kerangka Kecekapan:
                        <br />
                        {""}
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf"
                        title="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf"
                        >
                        https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf
                        </a>{""}
                        .
                    </p>
                </ExampleInAction>
                <h2>Komposisi Pasukan</h2>
                <p>
                    Saiz dan komposisi pasukan audit bergantung kepada saiz dan jenis tempat kerja yang akan diaudit, jumlah 
                    pekerja di tempat kerja, dan keadaan tenaga kerja, termasuk bahasa dan budaya pekerja. Kalau tempat kerja 
                    itu besar dan pelbagai bahasa dituturkan, pengaudit yang boleh bercakap dalam semua bahasa mesti disediakan. 
                    Jantina pekerja juga penting untuk dipertimbangkan; contohnya, lebih baik untuk wanita di temu duga oleh 
                    wanita untuk menjalankan perbincangan dengan lebih selesa seperti isu gangguan seksual.
                </p>
                <p>
                    Banyak syarikat lebih suka pengaudit dari negara di mana mereka akan menjalankan audit, sebab mereka memahami 
                    budaya, bahasa dan adat resam negara itu, dan mengambil pengaudit tempatan juga boleh bantu mengekalkan pembinaan 
                    keupayaan tempatan. 
                </p>
                <p>
                    Pemimpin pasukan harus memastikan bahawa pasukan boleh menjalankan tugas dengan cara berinteraksi. Oleh kerana 
                    pencabulan berlaku secara halus, atau disembunyikan dari pengaudit, pasukan tidak cuma patut membahagi tugas; dalam 
                    banyak hal, lebih daripada satu pengaudit patut memeriksa isu yang sama, dan pasukan juga patut berkumpul untuk menilai 
                    hasil kajian dan memastikan kaitan dan corak dikenal pasti. Pasukan juga harus bersetuju secara kolektif mengenai hasil 
                    audit yang muktamad. 
                </p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Contoh dalam Tindakan: Pasukan Penilaian Better Work
                    </h3>
                    <p>
                        Better Work mempunyai beberapa peraturan untuk pasukan penilaian, menggunakan dua “penasihat pengusaha” [pengaudit] 
                        yang hadir untuk setiap penilaian yang dibuat secara mengejut.{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://betterwork.org/our-work/factory-services"
                            title="Better Work advisors"
                        >
                            Penasihat Better Work
                        </a>{" "}
                        diambil bekerja dari tempatan dan menerima latihan yang luas. Penasihat baru selalu dipadankan dengan rakan yang lebih 
                        berpengalaman, dan tiada dua penasihat yang sama dipadankan untuk membuat lawatan selanjutnya ke kilang-kilang tertentu. 
                        Penasihat-penasihat yang membuat penilaian di suatu kilang tidak pernah individu yang sama memberikan pandangan mengenai 
                        pemulihan dan perkhidmatan nasihat kepada kilang yang sama.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default ms;
