import React from "react";
import { ContactData } from "../data/Contact/ContactData";

function Contact() {
  return (
    <div className="flex flex-col items-center p-20">
      <h2 className="text-2xl font-bold mb-8">サポート&連絡先</h2>
      <div className="flex space-x-12 flex-row justify-center items-center mb-12">
        {ContactData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="w-1/3 hover:opacity-80 transition-opacity"
          >
            <img src={item.image} alt={item.text} className="w-full" />
            <p className="text-center mt-2">{item.text}</p>
          </a>
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">サポートリクエスト</h3>
        <p className="mb-2">
          サポートが必要な場合は、以下の方法でお問い合わせください：
        </p>
        <ul className="list-disc list-inside">
          <li>Eメール: nhayato28@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
