import React from "react";
import { useNavigate } from "react-router-dom";

import { Text, Button } from "components";
import { StyledNotFoundPage } from "./styled";

import { ROUTES } from "navigation/routes";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(ROUTES.new_chat);
  };

  return (
    <StyledNotFoundPage>
      <Text textScale="header" fontWeight="bold">
        Page Not found 404
      </Text>
      <Button mt="8px" onClick={onClickHandler}>
        Go to main page
      </Button>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
