
import style from './imgreadContainer.module.scss'

import { ReaderImg } from '../ReaderImg'
export const ImgReadContainer = () => {



    return (
        <div className={style.photoContainer}>
          <div className={style.readerContainerPosition}>
            <ReaderImg/>
          </div>
        </div>

    )

}