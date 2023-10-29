import Image from 'next/image';
import React from 'react';

function Stage() {
  return (
    <div>
      <section
        className="guest"
        style={{
          flexDirection: 'row-reverse'
        }}
      >
        <div
          className="guest__image"
          style={{
            justifyContent: 'flex-end'
          }}
        >
          <Image src="/cage.png" alt="cage" width={470} height={660} />
        </div>
        <div className="guest__details">
          <h1 className="title">Le stage</h1>
          <div>
            <p>
              Rejoignez-nous pour une journée de MMA avec GregMMA à la Réunion. Ouvert à tous, cet
              événement vise l'échange et l'apprentissage dans les sports de combat. Avec cette
              événement, nous valorisons l'éducation par le sport pour inspirer la jeunesse. Venez
              renforcer les liens sociaux, rencontrer d'autres passionnés et contribuer à la
              cohésion de notre île.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stage;
