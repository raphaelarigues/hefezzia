import { Radio } from "@material-tailwind/react";
import style from "./style.module.scss";
import { useState } from "react";
import Device from "../../assets/device.png";

const CheckboxDSU = () => {
  const [selected, setSelected] = useState("");

  const handleRandioChange = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = () => {
    // console.log(selected);
  };
  return (
    <section className={style.containerCheckbox} color="blue">
      <div className="container">
        <div className={style.boxDSU}>
          <h1 className="text-3xl font-bold text-white">
            Desenvolva Sistemas Unicos
          </h1>

          <div className={`${style.boxCheckbox} "flex gap-10" `}>
            <Radio
              name="type"
              label="Sites Profissionais"
              value="sitesProfissionais"
              color="red"
              defaultChecked={selected === "sitesProfissionais"}
              onChange={handleRandioChange}
              className={style.checkboxRadio}
            />
            <Radio
              name="type"
              label="Lojas Virtuais"
              value="lojasvirtuais"
              color="red"
              checked={selected === "lojasvirtuais"}
              onChange={handleRandioChange}
              className={style.checkboxRadio}
            />
            <Radio
              name="type"
              label="Blogs Pessoais"
              value="blogspessoais"
              color="red"
              checked={selected === "blogspessoais"}
              onChange={handleRandioChange}
              className={style.checkboxRadio}
            />
            <Radio
              name="type"
              label="Site de Notícias"
              value="sitenoticias"
              color="red"
              checked={selected === "sitenoticias"}
              onChange={handleRandioChange}
              className={style.checkboxRadio}
            />
            <Radio
              name="type"
              label="Currículo/Resume"
              value="curriculoResume"
              color="red"
              checked={selected === "curriculoResume"}
              onChange={handleRandioChange}
              className={style.checkboxRadio}
            />
            <Radio
              name="type"
              label="Site One-Page"
              value="siteOnePage"
              color="red"
              checked={selected === "siteOnePage"}
              onChange={handleRandioChange}
              className={style.checkboxRadio}
            />
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Selecionar
            </button> */}
          </div>
          <button
            onClick={handleSubmit}
            className=" bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
          >
            Selecionar{" "}
          </button>
        </div>
        <div>
          <img className={style.imgDevice} src={Device} />
        </div>
      </div>
    </section>
  );
};

export default CheckboxDSU;
