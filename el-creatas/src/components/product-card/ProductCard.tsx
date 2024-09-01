import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/components/ui/card";
import { Skeleton } from "../shadcn/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    // <Card>
    //   <CardHeader>
    //     <CardTitle className="animate-pulse h-5 w-1/3"></CardTitle>
    //     <CardDescription className="animate-pulse h-4 w-1/3"></CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="animate-pulse h-4 w-1/3"></div>
    //     <div className="animate-pulse h-4 w-1/3"></div>
    //   </CardContent>
    //   <CardFooter>
    //     <div className="animate-pulse h-4 w-1/3"></div>
    //   </CardFooter>
    // </Card>
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[150px]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-[300px]" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[125px] w-[300px] rounded-xl" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-[300px]" />
      </CardFooter>
    </Card>
  );
};

export type ProductCardProps = {
  classNames?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
};

export const ProductCard = ({
  classNames,
  title,
  description,
  content,
  footer,
}: ProductCardProps) => {
  return (
    <Card className={classNames}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
