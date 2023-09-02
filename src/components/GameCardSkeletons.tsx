import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GamingCardSkeletons = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height="230px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamingCardSkeletons;
