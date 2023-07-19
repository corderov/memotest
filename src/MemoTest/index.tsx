import { ReactElement, useEffect, useState } from "react";
import Modal from "../Modal";
import "./styles.css";

import { albumImages } from "../data/albumImages";

export default function Memotest(): ReactElement {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [userWin, setUserWin] = useState<boolean>(false);

  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === albumImages.length) {
      setTimeout(() => setUserWin(true), 1000);
    }
  }, [guessed]);

  return (
    <main>
      {showModal && (
        <Modal
          title="Juego de la memoria"
          body="Jugamos con los albumes de los mejores artistas de Argentina!"
          onConfirm={() => setShowModal(false)}
          buttonTitle="A jugar!"
        />
      )}
      {userWin && (
        <Modal
          title="Felicitaciones"
          body="Ganaste!!!!"
          image="https://cdn.dribbble.com/users/5247053/screenshots/15374152/media/600d69992401d199ec99639f8b142184.gif"
          onConfirm={() => location.reload()}
          buttonTitle="Jugar de nuevo"
        />
      )}
      {albumImages.map((img) => {
        const [, url] = img.split("|");
        return (
          <div
            key={img}
            style={{
              cursor: "pointer",
              padding: 6,
              border: "1px solid #666",
              borderRadius: 12,
            }}
            onClick={() => {
              const isAlreadySelected = selected.includes(img);
              if (!isAlreadySelected && selected.length < 2) {
                setSelected((selected) => selected.concat(img));
              }
            }}
          >
            {selected.includes(img) || guessed.includes(img) ? (
              <img src={url} alt="icon" />
            ) : (
              <img
                src="https://icongr.am/clarity/cd-dvd.svg?size=128&color=302c2c"
                alt="icon"
              />
            )}
          </div>
        );
      })}
    </main>
  );
}
