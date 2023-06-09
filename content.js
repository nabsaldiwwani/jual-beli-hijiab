section#content{
    background-color: #fefefe;
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    gap: 16px;
    justify-content: center;
  }
  
  section#content .card {
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
  }
  
  @media (min-width: 450px) {
    section#content .card {
      width: 44%;
    }
  }
  
  @media (min-width: 600px) {
    section#content .card {
      width: 25%;
    }
  }
  
  @media (min-width: 600px) {
    section#content .card {
      width: 12%;
    }
  }
  
  section#content img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }