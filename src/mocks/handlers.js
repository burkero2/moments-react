import { rest } from "msw";

const baseURL = "https://moments-drf-api-ronan.herokuapp.com/";

export const handlers = [
    rest.get(
        `${baseURL}dj-rest-auth/user/`,
        (req, res, ctx) => {
          return res(
            ctx.json({
                "pk": 36,
                "username": "Betty",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 36,
                "profile_image": "https://res.cloudinary.com/dizpdydnq/image/upload/v1/media/images/DSC07359_yfy3vp"
                })
          );
        }
      ),

    rest.post(`${baseURL}dj-rest-auth/logout/`,
      (req, res, ctx) => {
        return res(ctx.status(200));
      }
    ),
  
];

