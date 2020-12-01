

- var cards = [{ 
title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' }, { 
title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' }, { 
title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' }, { 
title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }]


mixin card(title, copy, button)
  .card
    .content
      h2.title= title
      p.copy= copy
      button.btn= button

main.page-content
  each card in cards
    +card(card.title, card.copy, card.button)


    @import url('https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap');

$imageIds: '1517021897933-0e0319cfbc28', '1533903345306-15d1c30952de', '1545243424-0ce743321e11', '1531306728370-e2ebd9d7bb99';

$bp-md: 600px;
$bp-lg: 800px;

:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: 'Rubik', sans-serif;
  --font-serif: 'Cardo', serif;
}

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

.page-content {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  font-family: var(--font-sans);
  
  @media (min-width: $bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}



.card {  
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
  
  @media (min-width: $bp-md) {
    height: 350px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
  }
  
  @each $id in $imageIds {
    $i: index($imageIds, $id);
    
    &:nth-child(#{$i}):before {
      background-image: url(https://images.unsplash.com/photo-#{$id}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
  
  > * + * {
    margin-top: 1rem;
  }
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.copy {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

.btn {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  
  &:hover {
    background-color: lighten(black, 5%);
  }
  
  &:focus {
    outline: 1px dashed yellow;
    outline-offset: 3px;
  }
}

@media (hover: hover) and (min-width: $bp-md) {
  .card:after {
    transform: translateY(0);
  }
  
  .content {
    transform: translateY(calc(100% - 4.5rem));
    
    > *:not(.title) {
      opacity: 0;
      transform: translateY(1rem);
      transition:
        transform var(--d) var(--e),
        opacity var(--d) var(--e);
    }
  }
  
  .card:hover,
  .card:focus-within {
    align-items: center;

    &:before { transform: translateY(-4%); }
    &:after { transform: translateY(-50%); }

    .content {
      transform: translateY(0);

      > *:not(.title) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--d) / 8);
      }
    }
  }
  
  .card:focus-within {
    &:before,
    &:after,
    .content,
    .content > *:not(.title) {
      transition-duration: 0s;
    }
  }
}