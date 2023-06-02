import { getByDisplayValue } from '@testing-library/react';
import './App.css';
import Card from './Card.js';

function App() {
  return (
    
    <div className="App">
      <div className='container'>
        <h2>FİLMLER</h2>
      </div>
      
     <div className='haider'>
    
    
    <Card
    img="https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Rambo_Son_Kan.jpg/330px-Rambo_Son_Kan.jpg"
    title="RAMBO"
    description="Burma'daki olaylardan on bir yıl sonra, Vietnam Savaşı gazisi John Rambo, eski arkadaşı Maria Beltran ve onun torunu Gabriela ile birlikte Bowie, Arizona'da bulunan merhum babasının at çiftliğinde yaşamaktadır. Gabriela, Rambo'ya arkadaşı Gizelle'nin kendisinin biyolojik babası Manuel'i Meksika'da bulduğunu söyler"
    />

    <Card
    img="https://i.sozcucdn.com/wp-content/uploads/2020/04/30/iecrop/cehennem-melekleri_16_9_1588252003.jpg?w=1200&h=900&mode=crop&scale=both"
    title="CEHENNEM MELEKLERİ"
    description="The Expandables bir kiralık savaş timidir ve bu sefer ki görevleri Güney Amerika'da bir ülkeye sızarak, bu ülkenin acımasız dikatatörünü devirmektir.. Fakat görev başlar başlamaz The Expandables grubu herşeyin tam olarak göründüğü gibi olmadığını anlar ve kendilerini tehlikeli bir ihanet ağının içerisinde bulurlar. Görevlerinin tamamlanmasının engellenmesi ve masum bir insanın hayatının tehlikeye atılmasından başka The Expandables grubu daha zor bir durum olan grubun dağılma tehlikesiyle karşı karşıyadır.."
    />

    <Card
    img="https://tr.web.img4.acsta.net/pictures/bzp/01/109061.jpg"
    title="ROCKY BALBOA"
    description="“Sıradan” bir boksör Rocky Balboa’yı oynayan Sylvester Stallone, bu unutulmaz, Oscar® ödüllü filmde Dünya Ağır Sıklet Şampiyonu Apollo Creed’e (Carl Weathers) karşı yüreğiyle, mizahıyla ve unutulmaz gücüyle işi sonuna kadar götürüyor!"
    />
    </div>
    </div>
  );
}

export default App;
