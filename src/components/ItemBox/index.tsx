import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { 
  FiDownload,
  FiHeart,
  FiBookmark,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { Variants } from "framer-motion";

import { IProduct } from '@/interfaces/product';

import {
  Container,
  Title,
  Image,
  BtnRow,
  ImageContainer,
  IconBtn,
  ImgArrowBtn,
  Col,
  CloseBtn,
  InfoContent,
} from './styles';

const variants: Variants = {
  initial: {
    maxWidth: "var(--max-w)",
    width: "var(--w)",
    minWidth: 330,
    minHeight: 390,
  },
  expanded: {
    width: "calc(100vw - 96px)",
    maxWidth: "calc(100vw - 96px)",
    minHeight: 520,
  },
};

const ItemBox: React.FC<IProduct> = ({
  title,
  thumbnailUrl,
  totalDownloads,
  totalLikes,
  totalBookmarks,
  brand,
  surface,
  size,
  application,
  reproduction
}) => {
  const images = useMemo(() => Array(2).fill(thumbnailUrl), [thumbnailUrl]);
  const [imgIndex, setImgIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const expandedClass = useMemo(() => !isAnimating && isExpanded ? 'expanded' : '',
    [isExpanded, isAnimating]);

  const handleClick = useCallback(() => {
    setIsAnimating(true);
    setIsExpanded((prev) => !prev);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const handleExpand = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.target.tagName.match(/(button|line|svg|span)/gi) && !isExpanded) {
      handleClick();
    }
  }, [handleClick, isExpanded]);

  const handleImgIndex = useCallback((nmb: number) => {
    setImgIndex(() => {
      if(nmb > images.length -1) return 0
      else if (nmb < 0) return images.length -1
      return nmb;
    });
  }, [images]);

  return (
    <Container
      variants={variants}
      initial="initial"
      animate={isExpanded ? "expanded" : "initial"}
      transition={{
        ease: 'easeInOut',
        duration: .7
      }}
      onAnimationComplete={handleAnimationComplete}
      onClick={handleExpand}
      className={`${expandedClass || 'container'}`}>
      <CloseBtn className={expandedClass} onClick={handleClick}>
        <TfiClose fontSize={16}/>
      </CloseBtn>
      <ImageContainer className={expandedClass}>
        <div className='thumbs'>
          {images.map((i, k) => (
            <button key={k} disabled={k === imgIndex} onClick={handleImgIndex.bind(null, k)} className={`img${k === imgIndex ? ' active' : ''}`}>
              <img src={i} alt={`${title} - thumbnail - ${k}`} />
            </button>
          ))}
        </div>
        <Image
          src={images[imgIndex]}
          alt={title}
          className={expandedClass}
        />
        <div className="row">
          <ImgArrowBtn onClick={handleImgIndex.bind(null, imgIndex - 1)}>
            <FiChevronLeft fontSize={16}/>
          </ImgArrowBtn>
          <ImgArrowBtn onClick={handleImgIndex.bind(null, imgIndex + 1)}>
            <FiChevronRight fontSize={16}/>
          </ImgArrowBtn>
        </div>
      </ImageContainer>
      <Col className={expandedClass}>
        <Title className={expandedClass} title={title}>
          {title}
        </Title>
        <InfoContent className={`${expandedClass} only-expanded`}>
          <div className="info-row">
            <p className='info-name'>
              Marca:
            </p>
            <p className="info-text">
              {brand}
            </p>
          </div>
          <ul className="info-list">
            <li>
              <FiDownload/>
              <span>{totalDownloads}</span>
              Downloads
            </li>
            <li>
              <FiHeart/>
              <span>{totalLikes}</span>
              Curtidas
            </li>
            <li>
              <FiBookmark/>
              <span>{totalBookmarks}</span>
              Salvos
            </li>
          </ul>
          <h3 className='info-title'>
            Detalhes do produto
          </h3>
          <div className="info-row is-2">
            <p className='info-name is-2'>
              Aplicaçao:
            </p>
            <p className="info-text is-2">
              {application}
            </p>
          </div>
          <div className="info-row is-2">
            <p className='info-name is-2'>
              Formato:
            </p>
            <p className="info-text is-2">
              {size}
            </p>
          </div>
          <div className="info-row is-2">
            <p className='info-name is-2'>
              Reprodução:
            </p>
            <p className="info-text is-2">
              {reproduction}
            </p>
          </div>
          <div className="info-row">
            <p className='info-name is-2'>
              Superfície:
            </p>
            <p className="info-text is-2">
              {surface}
            </p>
          </div>
        </InfoContent>
        <BtnRow className={expandedClass}>
          <div className="col">
            <div className="i-col">
              <IconBtn className={expandedClass} is-down>
                <span className='icon'><FiDownload /></span>
                <span>{totalDownloads}</span>
                <p className='only-expanded'>
                  Fazer download
                </p>
              </IconBtn>
              <IconBtn className={expandedClass}>
                <span className='icon'><FiHeart /></span>
                <span>{totalLikes}</span>
              </IconBtn>
            </div>
            <IconBtn className={expandedClass}>
              <span className='icon'><FiBookmark /></span>
              <span>{totalBookmarks}</span>
            </IconBtn>
          </div>
          <IconBtn className={`${expandedClass} only-expanded`}>
            <span className='icon is-2'><HiOutlineSpeakerphone fontSize={16}/></span>
          </IconBtn>
        </BtnRow>
      </Col>
    </Container>
  );
}

export default ItemBox;