import CodeContainer from "../CodeContainer";
import { Rating, ThemeProvider, defaultTheme } from "nudge-components-library";
import {
  ratingSnippet,
  ratingDynamicSnippet,
  ratingAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import DynamicRating from "./DynamicRating";
import AdaptiveRating from "./AdaptiveRating";

const customTheme = {
  ...defaultTheme,
  rating: {
    ...defaultTheme.rating,
    star: {
      ...defaultTheme.rating.star,
      fontSize: "1.85rem",
      color: "#1b8dff",
      strokeWidth: "1.5",
    },
    filledStar: {
      color: "#1b8dff",
    },
  },
};

export default function RatingDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <Rating
                    id="rating-default"
                    rating={3}
                    ariaLabel="Default rating"
                    ratingLabel="Default version"
                    nudgeText="Share the rating to support better experiences for everyone."
                    nudgePosition="bottom"
                  />
                  <ThemeProvider theme={customTheme}>
                    <Rating
                      id="rating-custom"
                      rating={4}
                      ariaLabel="Custom rating"
                      ratingLabel="Custom version"
                      nudgeText="Share the rating to support better experiences for everyone."
                      nudgePosition="bottom"
                    />
                  </ThemeProvider>
                  <Rating
                    id="rating-disabled"
                    rating={2}
                    ariaLabel="Disabled rating"
                    ratingLabel="Disabled version"
                    nudgeText="Share the rating to support better experiences for everyone."
                    nudgePosition="top"
                    disabled={true}
                  />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={ratingSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <DynamicRating />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={ratingDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <AdaptiveRating />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={ratingAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
