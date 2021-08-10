import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import axios from 'axios';
import ModalGrid from './ModalGrid'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, ' +
      'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function ResultCard( { sneakers } ) {
  const [modalShow, setModalShow] = useState(false);
  const [itemOne, setItemOne] = useState({});

  const itemData = [
    {
        id: 1,
        img: "img/shoes1.jpeg",
        title: '아디다스 이지부스트',
        author: '신형식',
        category:'sneakers',
        like:1
    },
    {
        id : 2,
        img: "img/shoes2.jpeg",
        title: '나이키 신발',
        author: '김호진',
        category:'sneakers',
        like:4
    },
  ]

  const classes = useStyles();

//  const itemData = sneakers

    const showDetail = (id, category) => {
      console.log("클릭하셨습니다!", id, category);
      setModalShow(true);
      setItemOne({
        title:"title1",
        img:'img/museum.jpg',
        description: "설명1",
        like: 5,
        author: "김호진",
      });

      const body = {
        id: id,
        category: category,
      }
      
      axios.post('/getOneItem', body)
      .then(response => {
        setModalShow(true);
        setItemOne(response.data.item);
      })
      .catch(err => { throw err; })
    }
  return (
    <div className={classes.root}>
      <ImageList gap={1} className={classes.imageList} style={{width:'100%', height:'30%'}}>
        {
        itemData.map((item) => (
          <ImageListItem onClick={(e) => {e.preventDefault(); showDetail(item.id, item.category) }}
            key={item.img} 
            cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
            
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              position="bottom"
              actionIcon={"좋아요 : ", item.like}
              actionPosition="right"
              className={classes.titleBar}
              subtitle={item.author}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ModalGrid show={modalShow} item={itemOne} onHide={() => setModalShow(false)} />
    </div>
  );
}