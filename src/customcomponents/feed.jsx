import React, {useContext} from "react";
import founder from "../assets/founder.png";
import Items from "./items";
import background from "../assets/bg1.png";
import recipe from "../assets/bg2.png";
import { Slider2 } from "./slider";
import { AppStoreContext } from "../context/createcontext";
import { Subscribe } from "./footer";

const Feed = () => {
  const { data, changedata } = useContext(AppStoreContext);
  return (
    <div>
      <Items heading={"Best Sellers"} data={data} />

      <div className="founder row m-0 p-0">
        <div className="col-md-6 m-0 p-0">
          <img className="f_img" src={founder} alt="" />
        </div>
        <div className="col-md-6">
          <div className="founder_desc ">
            <h2>Meet the founder</h2>
            <p>
              Tansu, a chef by trade and food lover by nature, find out how and
              where our founder developed his inspiration for fresh produce
              resulting in Rox Meat.
            </p>
            <div className="btn_center_web"><button className="btn_read">Read More</button></div>
            <button className="btn_row_center_mob">Read More</button>
          </div>
        </div>
      </div>

      <Items heading={"Offer and New Arrivals"} data={data} />

      <div className="background">
        <div
          className="background_web"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h3>Meat Boxes</h3>
          <p>
            Make the upcoming barbecue season a memorable one with our selection
            of family favourites pork, chicken and lamb, both you and your
            guests will be spoilt for choice.
          </p>
          <p>
            Are you an expert barbecuer? Contact us directly to outline your
            specific requirements to ensure your ideal barbecuing experience.{" "}
          </p>
          <button className="btn_shop">Go to Shop</button>
        </div>

        <div className="bg_mob">
          <div
            className="background_mobile"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
          <div className="bg_mob_data">
            <h3>Meat Boxes</h3>
            <p>
              Make the upcoming barbecue season a memorable one with our
              selection of family favourites pork, chicken and lamb, both you
              and your guests will be spoilt for choice.
            </p>
            <p>
              Are you an expert barbecuer? Contact us directly to outline your
              specific requirements to ensure your ideal barbecuing experience.{" "}
            </p>
            <button className="btn_shop">Go to Shop</button>
          </div>
        </div>
      </div>

      <div className="recipe row m-0 p-0">
        <div className="col-md-6 m-0 p-0">
          <img className="r_img" src={recipe} alt="" />
        </div>
        <div className="col-md-6">
          <div className="recipe_desc_web ">
            <div className="subtitle">Recipe of the week</div>
            <h2>Traditional Roast Beef</h2>
            <p>
              A definitive dish classic: Traditional roast beef. This dish
              doesnt require an introduction, just high quality meat and
              patience.
            </p>
            <button className="btn_shop">To the Recipe</button>
          </div>
          <div className="recipe_desc_mobile ">
            <div className="subtitle">Recipe of the week</div>
            <h2>Traditional Roast Beef</h2>
            <p>
              A definitive dish classic: Traditional roast beef. This dish
              doesnt require an introduction, just high quality meat and
              patience.
            </p>
            <button className="btn_row_center_mob">To the Recipe</button>
          </div>
        </div>
      </div>

      <Slider2 />

      <Subscribe/>
    </div>
  );
};

export default Feed;
