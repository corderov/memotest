import { ReactElement, useEffect, useState } from "react";
import Modal from "../Modal";
import "./styles.css";

const ALBUM_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/en/0/02/Lali_-_Lali.jpg",
  "https://http2.mlstatic.com/D_NQ_NP_943549-MLA54271726131_032023-O.webp",
  "https://ca-times.brightspotcdn.com/dims4/default/7dbc480/2147483647/strip/true/crop/2100x2100+0+0/resize/1200x1200!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0a%2F5d%2F0ecdec4a747b91e7e002ff8c0c75%2F96b5ef0319624339a2b57ae34ac0175c",
  "https://cdn.smehost.net/sonymusiclatincom-uslatinprod/wp-content/uploads/2022/05/tucreesenmi-1024x1024.jpg",
  "https://www.lahiguera.net/musicalia/artistas/maria_becerra/disco/12240/maria_becerra_la_nena_de_argentina-portada.jpg",
  "https://i.scdn.co/image/ab67616d0000b2732ccbe28be97225ae844bef55",
  "https://www.clarin.com/img/2023/03/31/0Rgy0eonW_720x0__1.jpg",
  "https://i0.wp.com/caribempresarial.com/wp-content/uploads/2022/06/FOTO-PORTADA.png?fit=600%2C600&ssl=1",
  "https://upload.wikimedia.org/wikipedia/en/9/9e/Paulo_Londra_-_Homerun.png",
  "https://cdns-images.dzcdn.net/images/cover/d475db1f32bc7067ea99389daa7494f0/500x500.jpg",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

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
    if (guessed.length === ALBUM_IMAGES.length) {
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
      {ALBUM_IMAGES.map((img) => {
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
            onClick={() =>
              selected.length < 2 &&
              setSelected((selected) => selected.concat(img))
            }
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
