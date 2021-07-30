import React, { useEffect, useState } from "react";

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState("");
  useEffect(() => {
    generateEmoji(entries);
  }, [entries]);

  const generateEmoji = async (entries) => {
    try {
      const response = await fetch(
        `https://h4jfxb28qi.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
      );
      const data = await response.json();
      setEmoji(data.input);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="white f3">{`${name}, your current entry count is...`}</div>
      <div className="white f1">{entries}</div>
      <div className="white f3">Rank badge: {emoji}</div>
    </div>
  );
};

export default Rank;
