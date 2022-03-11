import React from "react";
import StaticData from "../../../../../../components/StaticData";
import OwnWords from "../../../../../../components/OwnWords";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Kepentingan Pemulihan Pencabulan</h1>
                <p>
                    Pihak perniagaan harus menangani pencabulan yang dikenal pasti. Penting untuk dicatatkan, bagaimanapun, 
                    bahawa pencabulan sering kelihatan di luar audit - ianya didedahkan apabila terdapat rungutan atau rujukan, 
                    atau melalui mekanisme laporan yang lain, sama ada formal atau tidak. Walau macam mana perniagaan sedar 
                    tentang pencabulan yang mungkin akan berlaku, pihak perniagaan harus menyiasat dan bila perlu mengambil 
                    tindakan terhadap pencabulan yang disahkan. Pelbagai pihak yang berkepentingan patut memainkan peranan 
                    untuk pemulihan: pihak pengurusan pembekal harus komited untuk memperbaiki keadaan sekiranya ada pencabulan; 
                    syarikat harus ada mekanisme untuk memastikan yang bantuan teknikal dan sokongan dan diperlukan untuk pemulihan; 
                    dan pekerja atau pertubuhan pekerja harus dibawa berunding untuk mendapatkan pandangan mereka mengenai tindakan 
                    pemulihan yang mana lebih berkesan.
                </p>
                <OwnWords>
                <h3>
                <OwnWords.Icon alt="Feedback"/>{" "}
                    <strong>
                        In Their Own Words: The Challenges of Age
                        Verification
                    </strong>
                </h3>
                <p>
                    Placeholder
                </p>
                </OwnWords>

                <ol>
                    <li>
                        <em>
                            <strong>Test 1</strong>
                        </em>
                        </li>
                        <li>
                            <strong>
                                <em>Test 2</em>
                            </strong>
                    </li>
                </ol>

                {/* <p>
                    {" "}
                    Remediation actions should always be designed to both
                    correct the problem found and prevent it from recurring. In
                    the case of child labor and forced labor violations, this
                    means both improving circumstances for individual child
                    labor or forced labor victims and preventing further child
                    labor or forced labor from occurring at the worksite.
                </p> */}
            </div>
        </StaticData>
    );
};

export default ms;
