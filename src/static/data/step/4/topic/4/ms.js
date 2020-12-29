import React from "react";
import Accordion from "../../../../../../components/Accordion";
import StaticData from "../../../../../../components/StaticData";
import cocoaSupplyChains from "../../../../../images/cocoa_supply_chains.png";
import genericImport from "../../../../../images/generic_import.png";
import electronics from "../../../../../images/electronics.jpg";
import minerals from "../../../../../images/minerals.jpg";
import seafood from "../../../../../images/seafood.jpg";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Pemetaan Rantai Bekalan</h1>
                <p>
                    Syarikat tahu siapa pembekal langsung mereka dan di mana mereka berada. Walau bagaimanapun, dalam banyak kes, syarikat mendapatkan sumber bahan dari
                    penjual atau ejen yang tidak mendedahkan kilang atau tempat pengeluaran lain dari mana mereka mendapat sumber. Seringkali syarikat mungkin mengetahui
                    kilang-kilang peringkat pertama dan tempat pengeluaran dalam rantai bekalan mereka, tetapi tidak banyak mengetahui tentang amalan pembekal tahap kedua,
                    ketiga dan lain-lain. Syarikat harus mengetahui sebanyak mungkin mengenai siapa pembekalnya mereka - di semua peringkat rantai bekalan, termasuk pengeluar
                    bahan mentah di aliran hulu. Semakin komprehensif syarikat dapat memetakan rantai bekalannya, semakin tepat mereka dapat mengenal pasti tempat-tempat di
                    sepanjang rantai tersebut yang mempunyai risiko penganiayaan buruh. Oleh itu, penting untuk berkomunikasi dengan pasukan pengurusan sumber dan/atau syarikat
                    rantai bekalan untuk mendapatkan data mengenai rantai bekalan mereka sendiri, dan jika lebih banyak maklumat diperlukan, untuk bekerjasama dengan mereka bagi
                    menambah data tersebut.
                </p>
                <p>
                    Sekiranya syarikat tersebut pada masa ini tidak mempunyai akses kepada maklumat mengenai pembekal ,selain daripada pembekal di mana mereka mendapat sumber bahan secara
                    langsung, pertimbangkan untuk bekerjasama dengan jabatan undang-undang dan/atau unit yang berkenaan dalam syarikat untuk membuat kontrak bersyarat bagi mendedahkan maklumat komprehensif mengenai semua pembekal.
                </p>
                <p>
                    “Pemetaan” termasuk mengetahui siapa pembekal anda (sepanjang rantai bekalan), tetapi juga di mana mereka berada. Maklumat ini penting untuk penilaian risiko dan impak yang berkaitan dengan undang-undang dan
                    persekitaran peraturan, antara lain. Latihan ini juga merangkumi peta yang menunjukkan musim pengeluaran atau kitaran pengeluaran sepanjang tahun, sebab ini berkaitan dengan masa yang berisiko untuk penganiayaan buruh.
                </p>
                <p>
                    Barang yang dihasilkan mengguna komoditi pertanian atau mineral sangat sukar dikesan, kerana bahan mentah tersebut dituai atau dilombong di kawasan yang tersebar luas dan digabungkan atau bercampur di peringkat
                    awal rantai bekalan. Beberapa syarikat dan gabungan industri telah cuba program “pengesanan” untuk mengesan beberapa komoditi dari barangan yang sudah siap, balik ke titik awal, melalui rantai bekalan.
                </p>
                <p>
                    Sebagai penjelasan, memetakan rantai bekalan tidak bermakna bahawa syarikat tersebut bertanggungjawab ke atas semua impak dan risiko berkaitan dengan semua entiti dalam rantai itu. Seperti yang dinyatakan dalam{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                        title="United Nations Guiding Principles on Business and Human Rights"
                    >
                        Prinsip Panduan Pertubuhan Bangsa-Bangsa Bersatu mengenai Perniagaan dan Hak Asasi Manusia
                    </a>
                    , &ldquo;“di mana syarikat perniagaan mempunyai sebilangan besar entiti dalam rantai nilai mereka, mungkin amat sukar untuk melakukan usaha ketekunan wajar terhadap kesan buruk salah guna hak asasi manusia bagi semua.
                    Sekiranya begitu, syarikat perniagaan patut mengenal pasti bidang am di mana risiko buruk kesan hak asasi manusia lebih signifikan, sama ada disebabkan pembekal berkenaan atau konteks operasi pelanggan, operasi tertentu,
                    produk atau perkhidmatan terbabit, atau pertimbangan relevan yang lain, dan keutamaan untuk ketekunan wajar hak asasi manusia.” Proses memberi keutamaan ini ditangani seperti berikut.
                </p>
                <p>Berikut adalah tiga contoh peta rantai bekalan:</p>
                <Accordion id="cocoa-chains-acc">
                                              <Accordion.Section id="cocoa-description">
                                              <Accordion.Title>
                                              Rantai Bekalan Koko
                                          </Accordion.Title>
                                          <Accordion.Panel>
                                              <img
                                              src={cocoaSupplyChains}
                                              alt="Cocoa Supply Chains"
                                              longdesc="#cocoa_chains"
                                              />
                                          <p className="small-text">
                                              Sumber:{" "}
                                              <a
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  href="http://www.crea.org/"
                                              >
                                                  Pusat untuk Renungan, Pendidikan dan Tindakan (CREA)
                                              </a>.
                                            </p>
                                             <div id="cocoa_chains">

                                                Grafik ini menunjukkan beberapa pelaku di dalam rantai bekalan koko, yang termasuk petani, pengumpul/pengangkut; pemproses; pengeksport; pasaran global; pengilang (yang mungkin mengilang kacang lain); pelanggan,
                                                yang termasuk kedai runcit, restoran, dan peniaga kecil yang membeli produk untuk dijual; dan pengguna peringkat akhir. Grafik ini juga menyenaraikan entiti dan aktiviti yang termasuk dalam kategori rantai bekalan;
                                                dan pengguna peringkat akhir. Côte d’Ivoire dan Ghana. Di Côte d’Ivoire, contoh petani termasuk, ladang kecil milik keluarga (&gt;750,000); operasi bebas; dan beberapa koperasi (di mana koko &lt;20% dari tanaman). Pengumpul
                                                dan pengangkut termasuk operator swasta; dan; dan pisteurs (orang tengah yang membeli secara langsung dari ladang) dan traitants (pembeli koko dari pisteurs). Pemproses dan pengeksport termasuk beberapa pihak yang terlibat,
                                                termasuk syarikat-syarikat antarabangsa. Ini termasuk mereka yang mengeluar produk separuh siap. Di Ghana, contoh petani termasuk ladang kecil milik keluarga yang termasuk, ladang keluarga (&gt;600,000); operasi bebas; dan
                                                beberapa koperasi kecil; dan beberapa koperasi (di mana koko &lt;10% tanaman). Pembelian awal kacang koko oleh pembeli berlesen (LBCs). Lembaga Koko Ghana* (COCOBOD) dan pertubuhan yang berkaitan memastikan bahawa keperluan
                                                kualiti berkaitan dengan penjualan. Pemproses dan pengeksport di Ghana termasuk COCOBOD dan syarikat antarabangsa. Ini termasuk mereka yang mengeluar produk separuh siap. Grafik menyenaraikan langkah terakhir yang serupa
                                                dalam proses untuk kedua-dua negara. Kacang dan produk pertanian kecil milik keluarga dipindahkan ke pasaran globalkepada pengeluar, yang mengeluarkan produk tersebut, seperti mengubah biji koko menjadi sekeping coklat.
                                                Kedai runcit, restoran dan perniagaan kecil berfungsi sebagai titik permulaan penjualan dan titik perkhidmatan pelanggan. Dan pengguna sekunder adalah pengguna peringkat akhir, misalnya individu yang membeli sekeping coklat
                                                dari kedai runcit (titik penjualan) atau kek coklat dari restoran (titik perkhidmatan).


                                                            </div>
                                          </Accordion.Panel>
                                      </Accordion.Section>
                                     { /*</Accordion>
                                    <Accordion id="electronic-supply-chain">*/}
                                        <Accordion.Section id="electronic-supply-chain-description">
                                            <Accordion.Title>
                                            Rantai Bekalan Elektronik
                                        </Accordion.Title>
                                        <Accordion.Panel>
                                        <img
                                              src={electronics}
                                              alt="Electronics Supply Chains"
                                              longdesc="#electronics_chains"
                                              />
                                        <img
                                              src={minerals}
                                              alt="DRC Minerals Supply Chains"
                                              longdesc="#minerals_chains"
                                              />
                                        <p className="small-text">
                                        Grafik di atas menunjukkan langkah am dalam rantai bekalan industri elektronik, yang mendapat sumber logam nadir bumi dari negara Afrika Tengah, Demokratik Republik Congo (DRC). Walaupun reka bentuk dan perkembangan elektronik pengguna terdapat
                                        berdekatan dengan pelanggan, seperti di Amerika Syarikat, pencarian sumber seringkali bermula jauh, separuh dunia di Afrika Tengah. Bahan yang dilombong kemudian dihantar melalui jalan darat di pantai Afrika Timur. Perjalanan dengan bot, bahan
                                        ini kemudian di hantar ke pelebur di Asia Timur dan Asia Tenggara, di mana pelebur menyempurnakan bahan dan menukar bahan menjadi komponen yang boleh digunakan untuk pembuatan yang berpusat di rantau ini dan juga di Eropah dan Amerika Utara.
                                          </p>
                                        </Accordion.Panel>
                                    </Accordion.Section>
                                   {/* </Accordion>

                                  <Accordion id="generic-imp-supply">*/}
                                      <Accordion.Section id="generic-imp-description">
                                          <Accordion.Title>
                                          Rantai Bekalan Makanan Laut
                                      </Accordion.Title>
                                      <Accordion.Panel>
                                          <br />
                                      <img
                                              src={seafood}
                                              alt="Seafood Supply Chains"
                                              longdesc="#seafood_chains"
                                              />
                                      <p>
                                      Struktur setiap rantai bekalan dalam sektor makanan laut mengambil perjalanan yang sama dari nelayan kepada pengguna peringkat akhir; bagaimanapun, ada banyak variasi dalam perjalanan. Tambahan pula, pengguna akhir dalam rantai bekalan makanan
                                      laut ada pelbagai, termasuk titik perkhidmatan (contohnya, restoran, hotel, hospital dan sekolah), dan titik penjualan (contohnya, kedai runcit, antara lain). Berkenaan dengan makanan laut yang ditangkap liar, armada kapal boleh berkoordinasi
                                      dengan “kapal induk” untuk mengumpulkan hasil tangkapan. Setelah hasil tangkapan ini sampai ke darat, makanan laut di hantar ke pemproses utama atau pasar terbuka. Pemproses utama menerima makanan laut dan memproses untuk jualan ke kedai runcit
                                      atau pengedar perkhidmatan makanan yang akan menghantar ke pengguna peringkat akhir.
                                    </p>
                                    <p>
                                    Makanan laut yang dijual dalam pasaran formal ini melibatkan perubahan dengan kepelbagaian dalam pelaku di tahap pertengahan rantai bekalan, dari pemproses utama kepada pemproses sekunder, kepada penjual, kepada pengangkut, antara lain, masing-masing
                                    memainkan peranan untuk menggerakkan produk lebih dekat kepada titik penjualan akhir.
                                    </p>
                                    <p>
                                    Sumber: {" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.resolve.ngo/site-eiscm/default.htm?RD=1"
                                        title="Resolve NGO"
                                    >
                                        https://www.resolve.ngo/site-eiscm/default.htm?RD=1
                                    </a>.
                                    </p>

                                      </Accordion.Panel>
                                  </Accordion.Section>
                                  </Accordion>
             </div>
        </StaticData>
    );
};

export default ms;
