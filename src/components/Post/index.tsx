import { PostInterface } from '@/interfaces/post.interface'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, Typography, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { useRouter } from 'next/router';
import React from 'react'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = (props:{post:PostInterface}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const router = useRouter();
  const {post}= props;


  return (
    <Card sx={{width: '50%',maxWidth: 'auto',display:'block' }} key={post.id}>
    <CardHeader
    onClick={()=>router.push(`/posts/${post.id}`)}
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={post.title}
      subheader="September 14, 2016"
    />
    {/* <CardMedia
      component="img"
      height="194"
      image="/static/images/cards/paella.jpg"
      alt="Paella dish"
    /> */}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      {post.text}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          large plate and set aside, leaving chicken and chorizo in the pan. Add
          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
          stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
    
    
      </CardContent>
    </Collapse>
  </Card>
  )
}

export default Post

