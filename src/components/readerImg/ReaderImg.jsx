import { Grid } from '@chakra-ui/react';
import img15n15 from '../../img/img15n15.jpg';
import img17n17 from '../../img/img17n17.jpg';
import img1n1 from '../../img/img1n1.png';
import img6n6 from '../../img/img6n6.jpg';
import img2n2 from '../../img/img2n2.png';
import img12 from '../../img/img12.png';
import img12new from '../../img/new-reader-2601.png';
import img10 from '../../img/img10.png';
import img4n4 from '../../img/img4n4.jpg';
import img14n14 from '../../img/img14n14.jpg';
import img8n8 from '../../img/img8n8.jpg';
import img8n8new from '../../img/new-reader-2601.png';
import img18n18 from '../../img/img18n18.jpg';
import img7n7 from '../../img/img7n7.jpg';
import img13n13 from '../../img/img13n13.jpg';
import img16n16 from '../../img/img16n16.jpg';
import img9n9 from '../../img/img9.png';
import img3n3 from '../../img/img3n3.jpg';
import img11 from '../../img/img11.png';
import img5n5 from '../../img/img5n5.jpg';

import style from './imgReadContainer/imgreadContainer.module.scss';
export const ReaderImg = () => {
  return (
    <>
      <Grid className={style.gridChakra}>
        <img src={img1n1} alt="" className={style.imgGrid} />
        <img src={img2n2} alt="" className={style.imgGrid} />
        <img src={img3n3} alt="" className={style.imgGrid} />
        <img src={img4n4} alt="" className={style.imgGrid} />
        <img src={img5n5} alt="" className={style.imgGrid} />
        <img src={img6n6} alt="" className={style.imgGrid} />
        <img src={img7n7} alt="" className={style.imgGrid} />
        <img src={img8n8new} alt="" className={style.imgGrid} />
        <img src={img9n9} alt="" className={style.imgGrid} />
        <img src={img10} alt="" className={style.imgGrid} />
        <img src={img11} alt="" className={style.imgGrid} />
        <img src={img12new} alt="" className={style.imgGrid} />
        <img src={img13n13} alt="" className={style.imgGrid} />
        <img src={img14n14} alt="" className={style.imgGrid} />
        <img src={img15n15} alt="" className={style.imgGrid} />
        <img src={img16n16} alt="" className={style.imgGrid} />
        <img src={img17n17} alt="" className={style.imgGrid} />
        <img src={img18n18} alt="" className={style.imgGrid} />
      </Grid>
    </>
  );
};
