import React from "react";
import { motion } from "framer-motion";
import { BASE_POSTER_PATH } from "../../services/util/utility";
import { Link } from "react-router-dom";
import "../../global.css";
function renderMovies({ props }) {
  return (
    <>
      <div className="row">
        {props.map((i) => (
          <div className="col-md-auto m-4" key={i.id}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              <Link to={`/detail/${i.id}`}>
                {i.poster_path === null ? (
                  <h3 className="cardTitle p-2">{i.title}</h3>
                ) : (
                  <img
                    src={`${BASE_POSTER_PATH}/w500${i.poster_path}`}
                    alt={i.original_title}
                  />
                )}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}

export default renderMovies;
