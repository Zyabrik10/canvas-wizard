import globalCss from "../../css/global.module.css";
// import css from "./styles/BookPage.module.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";
import { adaptTheme } from "../../ts/theme/adapt-theme";

export default function Book() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <div className={globalCss[`container`]}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut
          laborum, est voluptatibus ipsum repudiandae voluptatem eveniet culpa
          ipsa neque fuga unde possimus quam? Harum assumenda officia quaerat
          animi praesentium. Quos provident dolore accusantium dicta tempore ab
          vitae inventore dolorum, temporibus, id impedit architecto labore
          nulla sint quidem rerum veniam neque vero nihil asperiores. Magni
          aspernatur molestiae nam laborum quos? Aperiam accusantium reiciendis
          dolorum rerum porro ratione aliquid fuga ex, commodi et incidunt
        </p>
      </div>
    </>
  );
}
