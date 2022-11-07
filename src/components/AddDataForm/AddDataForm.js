import { useRef } from "react";

import {
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../services/FirebaseConfig";

const AddDataForm = () => {
  const coordinateRef = useRef(null);
  const nameRef = useRef(null);
  const ownerRef = useRef(null);
  const addressRef = useRef(null);
  const conservationRef = useRef(null);
  const tumblingDateRef = useRef(null);
  const tumblingLawRef = useRef(null);
  const tumblingTypeRef = useRef(null);
  const imageRef = useRef(null);
  const historicalDataRef = useRef(null);

  async function handleCreateData(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const owner = ownerRef.current.value;
    const address = addressRef.current.value;
    const conservation = conservationRef.current.value;
    const tumblingDate = tumblingDateRef.current.value;
    const tumblingLaw = tumblingLawRef.current.value;
    const tumblingType = tumblingTypeRef.current.value;
    const image = imageRef.current.value;
    const historicalData = historicalDataRef.current.value;
    const coordinate = coordinateRef.current.value;

    if (
      name &&
      owner &&
      address &&
      conservation &&
      tumblingDate &&
      tumblingLaw &&
      tumblingType &&
      image &&
      historicalData &&
      coordinate
    ) {
      await addDoc(collection(db, "tombamento"), {
        name: name,
        owner: owner,
        address: address,
        conservation: conservation,
        listed_date: tumblingDate,
        listed_law: tumblingLaw,
        listed_type: tumblingType,
        images: image,
        historical_data: historicalData,
        map_position: coordinate
      });

      returntombamentoData();
    }
  }

  const db = getFirestore(app)

  const returntombamentoData = () => {
    const tombamentoRef = collection(db, "tombamento");

    console.log({tombamentoRef})
  };

  return(
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={handleCreateData}
    >
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Nome"
        id="name"
        ref={nameRef}
      />
      <label htmlFor="owner">Proprietário</label>
      <input
        type="text"
        placeholder="Proprietário"
        id="owner"
        ref={ownerRef}
      />
      <label htmlFor="address">Endereço</label>
      <input
        type="text"
        placeholder="Endereço"
        id="address"
        ref={addressRef}
      />
      <label htmlFor="coordinateRef">Coordenadas</label>
      <input
        type="text"
        placeholder="Coordenadas"
        id="coordinateRef"
        ref={coordinateRef}
      />
      <label htmlFor="conservation">Conservação</label>
      <input
        type="text"
        placeholder="Conservação"
        id="conservation"
        ref={conservationRef}
      />
      <label htmlFor="tumblingDate">Data de Tombamento</label>
      <input
        type="date"
        placeholder="Data de Tombamento"
        id="tumblingDate"
        ref={tumblingDateRef}
      />
      <label htmlFor="tumblingLaw">Lei do Tombamento</label>
      <input
        type="text"
        placeholder="Lei do Tombamento"
        id="tumblingLaw"
        ref={tumblingLawRef}
      />
      <label>Tipo de Tombamento</label>
      <select name="select" ref={tumblingTypeRef} defaultValue="Tipo de Tombamento">
        <option value="federal">Federal</option>
        <option value="estadual">Estadual</option>
        <option value="municipal">Municipal</option>
      </select>
      <label htmlFor="tumblingImage">Imagem do Tombamento</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="tumblingImage"
        ref={imageRef}
      />
      <label htmlFor="tumblingData">Dados Históricos</label>
      <input
        type="file"
        accept="image/png, image/jpeg, .doc, .pdf"
        id="tumblingData"
        ref={historicalDataRef}
      />
      <input
        type="submit"
        placeholder="ENVIAR"
      />
    </form>
  )
}

export { AddDataForm };
