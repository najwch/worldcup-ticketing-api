import { Hono } from "hono";
import matchsRouter from "./routes/matchs";
import teamsRouter from "./routes/teams";
import stadiumsRouter from "./routes/stadiums";
import citiesRouter from "./routes/cities";
import countriesRouter from "./routes/countries";
import homeRouter from "./routes/home";

console.log("Hello via Bun!");

export const app = new Hono();

/* app.get("/", (c) => {
  return c.json(
    {
        success : true,
        message : "World Cup Ticketing API",
    },
  );
});

app.get('/matchs', (c) => {
  return c.json(
    { matchs,
      success : true,
      message : "All matchs",
      data : matchs

    },
  );
      
});

app.get('/matchs/:id', (c) => {
  const id = c.req.param('id') 
  const match = matchs.find(m => m.id === Number(id))
  
  if (!match){
    return c.json({success : false, error: "Match 666 does not exist"}, 404);
  }
  
  return c.json(
    { match,
      message : "Match 1",
      success : true,
      data : match
    },
  );
  
});*/

app.route("/matchs", matchsRouter);
app.route("/teams", teamsRouter);
app.route("/stadiums", stadiumsRouter);
app.route("/cities", citiesRouter);
app.route("/countries", countriesRouter);
app.route("/", homeRouter);
app.route("/health", homeRouter);
