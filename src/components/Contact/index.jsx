import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTextRight } from "react-icons/bs";
import styles from "./style.module.scss";

function InputGroup4({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div className="flex flex-row-reverse items-stretch w-full">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
        aria-label={label}
        className={`
  peer block w-full p-3 bg-white text-gray-600 bg-gray-100 border border-l-0 rounded-bl-none rounded 
  
  ${disabled ? "bg-gray-200" : ""} ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center pl-3 py-3 px-1 text-gray-600 
          transition-colors duration-300 ${
            disabled ? "bg-gray-200" : ""
          } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

function TextareaF({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  disabled,
  rows = 5,
}) {
  return (
    <div
      className={`flex flex-row-reverse items-stretch w-full rounded-xl  shadow-[10px_rgba(227,227,227,0.03)] ${className} `}
    >
      <textarea
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={label}
        aria-label={label}
        onChange={onChange}
        className={`peer bg-white block w-full h-full p-3 text-gray-600  border border-gray-400 :border-solid ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName}`}
        disabled={disabled}
        rows={rows}
      />
      <div
        className={`flex items-start pl-3 py-3 px-1 text-gray-600 alignt-start
         rounded-tr-none rounded-br-none rounded  text-gray-600  border-r-0 ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}
const Contact = () => {
  return (
    <section className={`${styles.containerContact} bg-blue-700	`}>
      <div className="flex flex-col w-full  p-4 sm:p-2 gap-4  rounded-md">
        <h1 className="self-center place-self-center">Entre em contato</h1>
        <p>
          Tem dúvidas ou precisa de mais informações? Entre em contato! Estamos
          prontos para responder suas perguntas. Nos envie um e-mail, teremos o
          prazer de ajudá-los!
        </p>
        <InputGroup4
          name="quantity"
          label="Nome"
          type="text"
          decoration={<BiUser />}
        />
        <InputGroup4
          name="address"
          label="Digite seu melhor e-mail"
          decoration={<AiOutlineMail size="1rem" className="text-gray-400" />}
        />

        <TextareaF
          label="Descrição"
          name="description"
          color="blue"
          decoration={<BsTextRight size="1rem" className="text-gray-400" />}
          inputClassName="border-yellow-400"
          decorationClassName="bg-yellow-100 text-red-400 border-red-400"
        />
      </div>
      <button className=" mb-5 bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
        Enviar{" "}
      </button>
    </section>
  );
};

export default Contact;
