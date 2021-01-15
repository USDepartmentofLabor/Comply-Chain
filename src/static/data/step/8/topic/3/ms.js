import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import styled from "styled-components";
import { theme } from "../../../../../../modules/config/theme";
import Accordion from "../../../../../../components/Accordion"; 

const Table = styled.table`
    border-collapse: collapse;
    border: 2px solid ${theme.colors.charcoal};
    margin-bottom: 16px;

    & th,
    td {
        border: 1px solid ${theme.colors.charcoal};
    }
`;

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Mengelak daripada Berulang</h1>
                <p>
                    Selain daripada menangani keadaan mangsa individu, penting untuk membuat analisis mengapa pencabulan 
                    berlaku. Analisis ini berbeza daripada cuma mengaitkan buruh kanak-kanak dan buruh paksa dengan kemiskinan, 
                    badan kerajaan yang tidak berkesan, dan sebab lain, yang dibincangkan dalam Menangani Penyebab Akar.
                </p>
                <p>
                    Dalam beberapa hal, seperti dinyatakan sebelum ini, tindakan sesebuah syarikat - seperti tekanan untuk 
                    mengisi pesanan pada tarikh yang ditetapkan atau perubahan secara mendadak jumlah/stail - mungkin 
                    menyebabkan situasi di mana pembekal tertekan untuk mengenakan kerja lebih masa, membawa masuk lebih 
                    ramai pekerja menggunakan buruh atau perekrut yang tidak mematuhi sepenuhnya, dan/atau sub-kontrak 
                    kepada kontraktor yang tidak disahkan untuk menyiapkan kerja. Dalam banyak hal, kegagalan pengurusan 
                    dan kelemahan dasar, proses dan/atau latihan di tempat kerja adalah sebab utama pencabulan, dan 
                    isu-isu ini boleh dan patut diperbaiki.
                </p>
                <p>
                    Tindakan memperbaiki patut dibentuk untuk membetulkan masalah yang didapati, memulihkan yang mana yang 
                    terkesan, dan mengelakkannya daripada berulang. Dalam dunia yang sempurna, langkah-langkah ini boleh 
                    dilakukan; bagaimanapun, masih terdapat penderaan, seperti jenayah seksual, yang mustahil untuk dihapuskan 
                    memandangkan kebimbangan berkaitan dengan emosi dan masyarakat. Dalam hal pencabulan buruh kanak-kanak dan 
                    buruh paksa, ini bermakna memperbaiki keadaan untuk buruh kanak-kanak perseorangan atau mangsa buruh paksa 
                    dan menghindari buruh kanak-kanak dan buruh paksa dari berlaku di tempat kerja.
                </p>
                <h2>Buruh Kanak-Kanak</h2>
                <p>
                    Dalam hal <strong>buruh kanak-kanak</strong>, antara sebabnya termasuk:
                </p>
                <div className="indent-margin">
                    <p>
                        Kegagalan meminta dokumen pengesahan umur waktu pengambilan kerja, atau gagal memeriksa, mengesahkan dan/atau 
                        mengesan mereka;
                    </p>
                    <p>
                        Pihak pengurusan kurang memahami aktiviti kerja yang sesuai, bahaya dan/atau waktu kerja yang sesuai untuk 
                        kanak-kanak; dan
                    </p>
                    <p>
                        Perhubungan penggajian yang tidak formal yang membenarkan kanak-kanak bolos dari sistem.
                    </p>
                </div>
                <p>
                    Impact Limited&rsquo;s{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://impacttlimited.com/wp-content/uploads/2017/01/Impactt_CLOPIndustrialcontexts_REVISION_26112008.pdf"
                        title="Operational Procedures for Remediation of Child Labour in Industrial Contexts"
                    >
                        Prosedur Operasi untuk Pemulihan Buruh Kanak-kanak dalam Konteks Industri
                    </a>{" "}
                    memberi panduan terperinci dalam memperbaiki keadaan mangsa dan menghindari kejadian buruh kanak-kanak berulang sekiranya 
                    terdapat dalam persekitaran kilang pembuatan.
                </p>
                <h2>Buruh Paksa</h2>
                <p>
                    Dalam hal <strong>buruh paksa</strong>, antara sebabnya termasuk:
                </p>
                <div className="indent-margin">
                    <p>
                        Kiraan gaji yang tidak tepat dan potongan dan/atau bayaran gaji yang lewat;
                    </p>
                    <p>
                        Dasar dan prosedur yang kurang jelas dalam penggajian dan pengambilan pekerja;
                    </p>
                    <p>
                        Prosedur yang kurang jelas bagi memastikan semua pekerja mempunyai kontrak yang dengan terang menetapkan 
                        terma penggajian, dalam bahasa yang mudah difahami, dan apa-apa perubahan yang dibuat pada kontrak dibuat 
                        dengan kebenaran pekerja secara bertulis;
                    </p>
                    <p>
                        Kurang mekanisme untuk pekerja membuat aduan; 
                    </p>
                    <p>Menyimpan rekod yang tidak sempurna;</p>
                    <p>
                        Kurang dasar dan prosedur untuk pekerja migran, termasuk mekanisme bagi memastikan pekerja migran tidak dikenakan 
                        yuran oleh broker/ejen, tidak diperlukan meletakkan deposit dan menerima terma penggajian dan syarat yang sama 
                        dengan bukan migran; dan
                    </p>
                    <p>
                        Dasar yang membenarkan majikan “menyimpan” dokumen pengenalan pekerja di luar kawalan pekerja.
                    </p>
                </div>
                <h2>Amalan Pemulihan Berkaitan dengan Buruh Paksa</h2>
                <p>
                    Tentulah, penyebab pencabulan boleh berlaku di luar kegagalan sistem, dan akibat dari penipuan secara sengaja oleh 
                    pembekal, pengurusan, pekerja tertentu dan/atau perekrut buruh. Sama ada secara tidak sengaja atau sengaja, 
                    pencabulan harus diperbaiki melalui Pelan Tindakan Pemulihan yang mempertanggungjawabkan pembekal.
                </p>
                <ExampleInAction id="plch">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Contoh dalam Tindakan: Kod Tingkah Laku Pembekal dan Yuran Merekrut Apple* 
                        </strong>
                    </h2>
                    <p>
                        Pada 2018, Apple menerima hadiah {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://uk.reuters.com/article/slavery-conference-award/apple-wins-global-award-for-efforts-to-eradicate-slave-labour-idUKL8N1WY5IG"
                        title="Stop Slavery Award by the Thomson Reuters Foundation"
                    >
                        Hadiah Hentikan Perhambaan oleh Yayasan Thomson Reuters
                    </a>{" "}
                        kerana memberikan maklumat awam terperinci mengenai rantai bekalan dalam meningkatkan ketelusan dan 
                        menamatkan perhambaan zaman moden. 
                    </p>
                    <p>
                        Pun begitu, pada permulaan tahun 2015, melalui{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple-Supplier-Code-of-Conduct-January.pdf"
                        title="Supplier Code of Conduct"
                    >
                        Kod Tingkah Laku Pembekal
                    </a>{""}
                    
                    , Apple—syarikat teknologi multinasional Amerika—memberi mandat kepada pembekal supaya tidak mengenakan yuran 
                    kepada pekerja  pembekal sebagai sebahagian daripada proses merekrut, walaupun terdapat undang-undang kebangsaan 
                    yang membenarkan yuran merekrut. Sekiranya Apple mendapati amalan yang bercanggah daripada mandat ini, pembekal 
                    mesti membayar balik yuran merekrut tersebut. Pembekal yang tidak melaksanakan tindakan untuk membetulkan amalan 
                    ini menghadapi risiko dalam hubungan perniagaan dengan Apple. 
                    </p>
                    <p>
                        Sejak 2008 dan mulai 2018, Apple telah berusaha untuk membayar balik yuran merekrut kepada 36,137 pekerja 
                        berjumlah $30.9 juta dengan $616,000 dibayar kepada 287 pekerja pada tahun 2018. sahaja
                    </p>
                    <p>
                    Sumber: {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf"
                        title="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf"
                    >
                        https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf
                    </a>
                    .
                    </p>
                                    
                </ExampleInAction>
                <p>
                    Empat bahagian berikut merangka beberapa contoh khusus mengenai tindakan pemulihan yang boleh diambil apabila terdapat 
                    penunjuk wujudnya buruh paksa. Dalam semua hal, isu-isu harus didokumenkan dan dijejak dan sistem pengurusan harus 
                    dikemas kini untuk mengelak daripada berulang
                </p>
                <Accordion id="prevent-recurrence" role="table">
                        <Accordion.Section id="practice-issue">
                            <Accordion.Title>
                                <strong>
                                Pemulihan Isu Amalan Merekrut

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                 <Table>
                    <caption>
                        Table: Pemulihan Isu Amalan Merekrut
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" tabindex="0">
                                    <strong>Keadaan</strong>
                            </th>
                            <th scope="col" width="45%" tabindex="0">
                                <p>
                                    <strong>Tindakan Pembetulan</strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row" tabindex="0">Pekerja diculik, dikurung dalam proses merekrut atau dijual.</th>

                            <td tabindex="0">
                                <p>
                                    Laporkan kesalahan kepada pihak Penguatkuasa Undang-Undang Bekerjasama dengan penguatkuasa 
                                    undang-undang dan kumpulan tempatan untuk menyediakan tempat yang selamat bagi mangsa dan 
                                    hubungkan mereka dengan perkhidmatan yang diperlukan.
                                </p>
                            </td>
                        </tr>
                        <tr>
                                <th scope="row" tabindex="0">Pekerja yang direkrut oleh sebab pinjaman atau duit pendahuluan dan terpaksa bekerja untuk membayar hutang tersebut.</th>
                            <td tabindex="0">
                                <p>
                                    Sekiranya pembekal membayar pinjaman atau duit pendahuluan, pastikan sama ada syaratnya berpatutan. 
                                    Sekiranya tidak, berusaha untuk mencari terma yang berpatutan di antara pembekal dan pekerja. 
                                    Sekiranya pinjaman/duit pendahuluan telah dibayar oleh perekrut buruh, pastikan sama ada pembekal 
                                    mengetahui tentang urusan tersebut. Sekiranya tidak, berusaha untuk mencari terma yang berpatutan 
                                    di antara pembekal, perekrut dan pekerja. Sekiranya tidak, pembekal patut menghentikan hubungan 
                                    dengan perekrut tersebut. Laporkan perekrut yang tidak bertanggungjawab kepada pihak berkuasa. 
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" tabindex="0">Penyelewengan dalam merekrut: pekerja dijanjikan jenis kerja, keadaan kerja, terma kontrak,
                            perumahan atau keadaan tempat tinggal, lokasi pekerjaan, majikan atau gaji/upah yang tidak menjadi kenyataan.</th>

                            <td tabindex="0">
                                <p>
                                    Sekiranya pembekal membuat janji palsu, pembekal harus memberi pekerja yang ingin berhenti, gaji penuh 
                                    mereka dan pengangkutan untuk pulang. Sekiranya janji palsu dibuat oleh perekrut buruh, pastikan sama 
                                    ada pembekal mengetahui tentang urusan tersebut. Kalau betul, pembekal masih bertanggungjawab ke atas 
                                    apa yang dinyatakan sebelum ini. Sekiranya tidak, pembekal patut menghentikan hubungan dengan perekrut 
                                    tersebut. Laporkan perekrut yang tidak bertanggungjawab kepada pihak berkuasa.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                                
                            </Accordion.Panel>
                            </Accordion.Section>
                    <Accordion.Section id="living-cond">
                            <Accordion.Title>
                                <strong>
                                    Pembetulan Isu Tempat Kerja dan Keadaan Perumahan 
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        {" "}
                        Table: Pembetulan Isu Tempat Kerja dan Keadaan Perumahan{" "}
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="0">
                                <p>
                                    <strong>Keadaan</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="0">
                                <p>
                                    <strong>Tindakan Pembetulan</strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                                <th scope="row" tabindex="0">Pekerja yang kerja berlebihan masa lebih daripada yang dihadkan di bawah undang-undang.</th>

                            <td tabindex="0">
                                <p>
                                    Pastikan pembekal membayar balik gaji untuk semua kerja lebih masa yang sudah dilakukan. Kerja dengan 
                                    pembekal untuk menilai dasar pengambilan pekerja dan amalan pampasan, seperti bayaran untuk setiap 
                                    unit barang yang menyumbang kepada kerja lebih masa. Periksa amalan mendapatkan sumber anda sendiri, 
                                    termasuk masa menghabiskan kerja, perubahan pesanan, harga dan tekanan lain yang mengakibatkan langkah 
                                    untuk mengurangkan kos dengan melampau oleh pembekal, termasuk kerja berlebihan masa. Pastikan semua 
                                    pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan sistem pematuhan sosial.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" tabindex="0">Pekerja dijangka bekerja &ldquo;bila dipanggil.&rdquo;</th>
                           <td tabindex="0">
                                <p>
                                    Kerja dengan pembekal untuk membentuk pelan pengambilan pekerja dengan teratur yang sealiran dengan 
                                    keperluan kod anda. Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang 
                                    dan kod tingkah laku anda.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan mengehadkan pergerakan pekerja atau untuk berkomunikasi.</th>
                            <td tabindex="0">
                                <p>
                                    Pastikan siapa - pengurusan, penyelia, ketua giliran kerja, dan lain-lain - terlibat dalam mengehadkan 
                                    kebebasan pekerja untuk bergerak atau berkomunikasi dan menyiasat tindakan individu ini. Sekiranya 
                                    individu bertindak sendiri tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, 
                                    yang boleh termasuk latihan, menggantung atau menghentikan kerja. Sekiranya had ini datang dari pihak 
                                    pengurusan, hentikan hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan 
                                    amalan-amalan tersebut.
                                </p>
                                <p>
                                    Siasat dengan lebih lanjut keadaan di tempat kerja yang pengurusan atau penyelia mungkin ingin sembunyikan - 
                                    termasuk melalui temu duga di luar dengan pekerja dan anggota komuniti yang berpengetahuan. Pastikan semua 
                                    pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku anda, termasuk 
                                    tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan menerima 
                                    gaji penuh.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Keadaan tempat tinggal yang semakin buruk.</th>
                            <td tabindex="0">
                                <p>
                                    Pastikan pembekal betul-betul memahami standard minimum anda dalam hal tempat tinggal pekerja. Berikan pembekal 
                                    waktu yang singkat untuk membetulkan keadaan tempat tinggal. Pastikan semua pekerja mendapat latihan mengenai 
                                    hak mereka di bawah undang-undang dan kod tingkah laku anda, termasuk standard tempat tinggal. Pastikan semua 
                                    pekerja yang ingin berhenti dibenarkan membuat demikian dan menerima gaji penuh.
                                </p>
                                <p>
                                    Buat langkah susulan dengan menyiasat tanpa mengumumkan, termasuk menemu duga pekerja di luar dan juga anggota 
                                    komuniti yang berpengetahuan Sekiranya tempat tinggal masih tidak dibaiki, hentikan hubungan dengan pembekal &ndash; 
                                    sambil mengurangkan impak kepada pekerja.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pekerja yang dipaksa melakukan aktiviti haram, seperti bekerja di rumahnya atau di rumah keluarganya atau
                                mengambil dadah yang mengakibatkan ketagihan.</th>
                           <td tabindex="0">
                                <p>
                                    Pastikan siapa - pengurusan, penyelia, ketua giliran kerja, dan lain-lain - terlibat dalam mengehadkan kebebasan 
                                    pekerja untuk bergerak atau berkomunikasi dan menyiasat tindakan individu ini. Sekiranya individu bertindak 
                                    sendiri tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja. Sekiranya had ini datang dari pihak pengurusan, hentikan hubungan dengan 
                                    pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut.
                                </p>
                                <p>
                                    Siasat dengan lebih lanjut keadaan di tempat kerja yang pengurusan atau penyelia mungkin ingin sembunyikan &ndash; 
                                    termasuk melalui temu duga di luar dengan pekerja dan anggota komuniti yang berpengetahuan. Pastikan semua pekerja 
                                    mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, termasuk tempat untuk mengadu. 
                                    Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan menerima gaji penuh.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pembekal membanyakkan kadar hutang pekerja.</th>
                            <td tabindex="0">
                                <p>
                                    Pastikan sumber hutang awal pekerja. Sekiranya hutang awal pekerja kepada pembekal, pastikan pembekal memansuhkan 
                                    hutang tersebut. Sekiranya hutang awal kepada perekrut buruh, siasat sama ada pembekal mengetahui tentang urusan 
                                    hutang tersebut. Sekiranya ya, pastikan pembekal memansuhkan hutang tersebut. Sekiranya tidak, pembekal patut 
                                    menghentikan hubungan dengan perekrut tersebut. Laporkan perekrut tersebut kepada pihak berkuasa.
                                </p>
                                <p>
                                    Berkaitan dengan meningkatkan jumlah hutang, pastikan majikan berhenti mengenakan faedah dalam bentuk apa pun ke 
                                    atas hutang. Sekiranya hutang melambung akibat pembelian barang dari majikan, seperti di kantin, pastikan sama ada 
                                    pekerja ada pilihan lain. Sekiranya pekerja tiada pilihan melainkan membeli di kedai majikan, bekerjasama dengan 
                                    pembekal untuk memastikan harga dan terma berpatutan.
                                </p>
                                <p>
                                    Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan menerima gaji penuh.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pekerja bergantung kepada majikan untuk perumahan, makanan atau keperluan lain.</th>
                            <td tabindex="0">
                                <p>
                                    Dalam beberapa hal, terutama bagi pekerja migran, peruntukan tempat tinggal, makanan dan lain-lain keperluan 
                                    oleh majikan mungkin pilihan yang terbaik untuk semua yang terlibat. Bagaimanapun, kualiti tempat tinggal; 
                                    dan makanan mestilah diperiksa dan sekiranya ia tidak menepati standard minimum, bekerjasama dengan pembekal 
                                    untuk memperbaiki kualiti.
                                </p>
                                <p>
                                    Buat langkah susulan dengan menyiasat tanpa mengumumkan termasuk menemu duga pekerja di luar dan juga anggota 
                                    komuniti yang berpengetahuan Sekiranya keadaan tempat tinggal/makanan tidak semakin baik, hentikan hubungan 
                                    dengan pembekal.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pekerja bergantung secara peribadi kepada majikan.</th>
                            <td tabindex="0">
                                <p>
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di tempat kerja di bawah undang-undang dan kod 
                                    tingkah laku anda, tanpa mengira hubungan peribadi. 
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="impossible-leaving">
                            <Accordion.Title>
                                <strong>
                                Pembetulan Isu “Mustahil untuk Meninggalkan”
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Table: Pembetulan Isu “Mustahil untuk Meninggalkan”{" "}
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="0">
                                <p>
                                    <strong>Keadaan</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="0">
                                <p>
                                    <strong>Tindakan Pembetulan</strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pekerja tidak bebas berhenti oleh sebab kemudahan yang mereka terima atau sebab kekangan dari pihak majikan.</th>
                            <td tabindex="0">
                                <p>
                                    Sekiranya penyelia atau individu lain membuat pekerja percaya bahwa mereka tidak boleh berhenti kerja sebab 
                                    pembekal telah menyediakan latihan dan kemudahan lain, atau sebab keperluan kontrak yang tidak sah, pastikan 
                                    pembekal mengambil tindakan pembetulan yang sesuai terhadap individu tersebut, dari latihan kepada berhenti 
                                    kerja. Sekiranya pekerja tidak memahami hak mereka, berikan latihan bagi memastikan bila mereka boleh berhenti. 
                                    Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan diberi gaji penuh kepada mereka.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pekerja berasa mereka terpaksa terus bekerja oleh sebab mereka belum diberi gaji.</th>
                            <td tabindex="0">
                                <p>
                                    Pastikan gaji dikira dengan tepat dan semua pekerja yang terlibat dalam gaji diberi cukup latihan dalam 
                                    mengira gaji. Pastikan pembekal membayar semua gaji di bawah undang-undang tempatan (contohnya, kalau 
                                    undang-undang tempatan menetapkan gaji dibayar dua kali sebulan, pastikan semua gaji dibayar, pada tahap 
                                    minimum, untuk dua minggu yang lalu). Pastikan jadual pembayaran dibuat secara formal, pada tahap yang 
                                    ditetapkan di bawah undang-undang dan kod anda. Buat lawatan susulan untuk audit yang tidak diumumkan. 
                                    Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan menerima gaji penuh kepada 
                                    mereka.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pekerja bekerja berlebihan masa atau bekerja tanpa henti untuk membayar hutang atau duit pendahuluan kepada majikan atau perekrut.</th>
                            <td tabindex="0">
                                <p>
                                    Sekiranya pembekal membayar pinjaman atau duit pendahuluan, pastikan sama ada syaratnya berpatutan. Sekiranya tidak, berusaha untuk 
                                    mencari terma yang berpatutan di antara pembekal dan pekerja. Sekiranya pinjaman/duit pendahuluan telah dibayar oleh perekrut buruh, 
                                    pastikan sama ada pembekal mengetahui tentang urusan tersebut. Sekiranya tidak, berusaha untuk mencari terma yang berpatutan di antara 
                                    pembekal, perekrut dan pekerja. Sekiranya tidak, pembekal patut menghentikan hubungan dengan perekrut tersebut. Laporkan perekrut yang 
                                    tidak bertanggungjawab kepada pihak berkuasa.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="penalty-issue">
                        <Accordion.Title>
                            <strong>
                            Pembetulan Isu Penalti atau Ancaman 
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                <Table width="100%">
                    <caption>
                        Table: Pembetulan Isu Penalti atau Ancaman
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="0">
                                <p>
                                    <strong>Keadaan</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="0">
                                <p>
                                    <strong>Pemulihan</strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Pembekal atau Perekrut menyimpan dokumen pengenalan atau dokumen perjalanan.</th>
                            <td tabindex="0">
                                {/* <p id="P1"> */}
                                <p>
                                    Pembekal tidak boleh merampas atau mengawal identiti pengenalan pekerja atau dokumen perjalanan 
                                    melainkan cuma untuk menyimpankannya dengan baik, dan sekiranya pekerja boleh mendapatkannya 
                                    semula dengan segera apabila diminta. Pastikan pembekal mengembalikan semua dokumen pengenalan 
                                    pekerja. Sekiranya pekerja lebih suka kalau majikan menyimpankannya dengan selamat, pastikan ada 
                                    dasar yang ditetapkan untuk mendapatkan semula dokumen dan semua pekerja tahu tentang dasar 
                                    tersebut. Buat pemeriksaan susulan mengenai isu tersebut dalam audit yang tidak diumumkan.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan mengehadkan pekerja daripada berkomunikasi</th>
                            <td tabindex="0">
                                {/* <p><a href="#P1">See above.</a></p> */}
                                <p>
                                <abbr title="Pembekal tidak boleh merampas atau mengawal identiti pengenalan pekerja atau dokumen perjalanan 
                                    melainkan cuma untuk menyimpankannya dengan baik, dan sekiranya pekerja boleh mendapatkannya 
                                    semula dengan segera apabila diminta. Pastikan pembekal mengembalikan semua dokumen pengenalan 
                                    pekerja. Sekiranya pekerja lebih suka kalau majikan menyimpankannya dengan selamat, pastikan ada 
                                    dasar yang ditetapkan untuk mendapatkan semula dokumen dan semua pekerja tahu tentang dasar 
                                    tersebut. Buat pemeriksaan susulan mengenai isu tersebut dalam audit yang tidak diumumkan.">
                                    Lihat di atas.</abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan mengancam untuk menyerahkan pekerja kepada pihak imigresen.</th>
                            <td tabindex="0">
                                {/* <p id="P2"> */}
                                <p>
                                    Dalam mana-mana situasi yang melibatkan keganasan, penalti, ugutan atau ancaman, pastikan siapa - pengurusan, 
                                    penyelia, ketua giliran kerja, dll. - terlibat dalam pencabulan hak ini. Sekiranya individu bertindak sendiri 
                                    tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja.
                                </p>
                                <p>
                                    Sekiranya penalti, ancaman, dll., dimulakan oleh pihak pengurusan, atau kalau pengurusan bersubahat, hentikan 
                                    hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut. 
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, 
                                    termasuk tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan 
                                    menerima gaji penuh. Buat langkah susulan dengan audit yang tidak diumumkan termasuk menemu duga pekerja di 
                                    luar dan juga anggota komuniti yang berpengetahuan.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan melakukan atau mengancam penderaan atau gangguan seksual.</th>
                            <td tabindex="0">
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="
                                    alam mana-mana situasi yang melibatkan keganasan, penalti, ugutan atau ancaman, pastikan siapa - pengurusan, 
                                    penyelia, ketua giliran kerja, dll. - terlibat dalam pencabulan hak ini. Sekiranya individu bertindak sendiri 
                                    tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja.
                                    Sekiranya penalti, ancaman, dll., dimulakan oleh pihak pengurusan, atau kalau pengurusan bersubahat, hentikan 
                                    hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut. 
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, 
                                    termasuk tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan 
                                    menerima gaji penuh. Buat langkah susulan dengan audit yang tidak diumumkan termasuk menemu duga pekerja di 
                                    luar dan juga anggota komuniti yang berpengetahuan.
                                    ">
                                        Lihat di atas.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan atau perekrut mengancam untuk mengambil semula hak istimewa seperti kenaikan pangkat, mengancam untuk
                        memburukkan keadaan di tempat kerja atau mengancam untuk membuang pekerja.</th>
                            <td tabindex="0">
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="
                                    alam mana-mana situasi yang melibatkan keganasan, penalti, ugutan atau ancaman, pastikan siapa - pengurusan, 
                                    penyelia, ketua giliran kerja, dll. - terlibat dalam pencabulan hak ini. Sekiranya individu bertindak sendiri 
                                    tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja.
                                    Sekiranya penalti, ancaman, dll., dimulakan oleh pihak pengurusan, atau kalau pengurusan bersubahat, hentikan 
                                    hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut. 
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, 
                                    termasuk tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan 
                                    menerima gaji penuh. Buat langkah susulan dengan audit yang tidak diumumkan termasuk menemu duga pekerja di 
                                    luar dan juga anggota komuniti yang berpengetahuan.
                                    ">
                                        Lihat di atas.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan atau perekrut mengeksploit kepercayaan agama atau budaya untuk mengancam pekerja.</th>
                            <td tabindex="0">
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="
                                    alam mana-mana situasi yang melibatkan keganasan, penalti, ugutan atau ancaman, pastikan siapa - pengurusan, 
                                    penyelia, ketua giliran kerja, dll. - terlibat dalam pencabulan hak ini. Sekiranya individu bertindak sendiri 
                                    tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja.
                                    Sekiranya penalti, ancaman, dll., dimulakan oleh pihak pengurusan, atau kalau pengurusan bersubahat, hentikan 
                                    hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut. 
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, 
                                    termasuk tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan 
                                    menerima gaji penuh. Buat langkah susulan dengan audit yang tidak diumumkan termasuk menemu duga pekerja di 
                                    luar dan juga anggota komuniti yang berpengetahuan.
                                    ">
                                        Lihat di atas.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan atau perekrut menahan gaji atau aset pekerja atau mengancam mengenakan penalti kewangan.</th>
                            <td tabindex="0">
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="
                                    alam mana-mana situasi yang melibatkan keganasan, penalti, ugutan atau ancaman, pastikan siapa - pengurusan, 
                                    penyelia, ketua giliran kerja, dll. - terlibat dalam pencabulan hak ini. Sekiranya individu bertindak sendiri 
                                    tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja.
                                    Sekiranya penalti, ancaman, dll., dimulakan oleh pihak pengurusan, atau kalau pengurusan bersubahat, hentikan 
                                    hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut. 
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, 
                                    termasuk tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan 
                                    menerima gaji penuh. Buat langkah susulan dengan audit yang tidak diumumkan termasuk menemu duga pekerja di 
                                    luar dan juga anggota komuniti yang berpengetahuan.
                                    ">
                                        Lihat di atas.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="0">Majikan mengancam memberi kerja berlebihan bagi bekerja yang tidak bekerjasama.
                            Majikan mengugut untuk memaksa pekerja.</th>
                            <td tabindex="0">
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="
                                    alam mana-mana situasi yang melibatkan keganasan, penalti, ugutan atau ancaman, pastikan siapa - pengurusan, 
                                    penyelia, ketua giliran kerja, dll. - terlibat dalam pencabulan hak ini. Sekiranya individu bertindak sendiri 
                                    tanpa pengetahuan pengurusan, ambil tindakan yang sesuai terhadap individu ini, yang boleh termasuk latihan, 
                                    menggantung atau menghentikan kerja.
                                    Sekiranya penalti, ancaman, dll., dimulakan oleh pihak pengurusan, atau kalau pengurusan bersubahat, hentikan 
                                    hubungan dengan pembekal atau berikan pembekal waktu yang singkat untuk menamatkan amalan-amalan tersebut. 
                                    Pastikan semua pekerja mendapat latihan mengenai hak mereka di bawah undang-undang dan kod tingkah laku, 
                                    termasuk tempat untuk mengadu. Pastikan semua pekerja yang ingin berhenti dibenarkan membuat demikian dan 
                                    menerima gaji penuh. Buat langkah susulan dengan audit yang tidak diumumkan termasuk menemu duga pekerja di 
                                    luar dan juga anggota komuniti yang berpengetahuan.
                                    ">
                                        Lihat di atas.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                </Accordion>
                <br />
                <ExampleInAction id="better_work">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>Contoh dalam Tindakan: Proses Pemulihan Better Work</strong>
                    </h2>
                    <p>
                        Better Work menggalakkan pertumbuhan struktur perhubungan industri demokratik dan proses dengan 
                        menggabungkan wakil pertubuhan majikan dan kesatuan sekerja untuk membentuk dan melaksanakan 
                        program-programnya.   Di peringkat kilang, isu pematuhan yang dikenalpasti melalui penilaian ditangani 
                        oleh Jawatankuasa Perunding Membaiki Prestasi (PICC), sebuah badan terdiri daripada 8-10 orang dari pihak 
                        pengurusan dan wakil pekerja.  Di mana mungkin, penubuhan dan pembangunan keupayaan PIICC dibangunkan di 
                        atas struktur pengurusan buruh yang sedia ada dan berkesan.  Setiap PICC bertemu sekurang-kurangnya setiap 
                        bulan.  Disokong oleh Penasihat Better Work, mereka merumuskan dan mengawasi pelaksanaan pelan pemulihan, 
                        memastikan pengurusan dan pekerja berkongsi tanggungjawab dan kebertanggungjawapan di sepanjang proses.   
                        Penasihat Better Work boleh memberi bantuan teknikal dan melakukan lawatan susulan untuk menilai kemajuan 
                        pelan pemulihan.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default ms;
