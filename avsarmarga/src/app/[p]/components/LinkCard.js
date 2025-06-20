import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function LinkCard() {
  const links = [
    {
      title: "Profile Picture",
      url: "https://pfpmaker.com/",
      image: "/pb.png",
    },
    {
      title: "Banner Image",
      url: "https://www.canva.com/",
      image: "/pb.png",
    },
    {
      title: "Custom URL",
      url: "https://youtu.be/j2YA_TScR-E?si=-u6jU64sgZwuq_iL&t=184",
      image: "/url.png",
    },
    {
      title: "Headline",
      url: "https://app2.gravitywrite.com/",
      image: "/headline.png",
    },
    {
      title: "About Section",
      url: "https://app2.gravitywrite.com/",
      image: "/about.png",
    },
    {
      title: "Skills Section",
      url: "https://youtu.be/EWSuMW5IarU?si=8UpnIX7QTCROSItq&t=396",
      image: "/skills.png",
    },
    {
      title: "Experience Section",
      url: "https://youtu.be/j2YA_TScR-E?si=Vf5g1U0cQqKpXw5y&t=413",
      image: "/exp.png",
    },
    {
      title: "Featured Section",
      url: "https://youtu.be/j2YA_TScR-E?si=QLRP8aDR0afzPfyG&t=420",
      image: "/feature.png",
    },
    {
      title: "Certifications Section",
      url: "https://www.coursera.org/",
      image: "/certi.png",
    },
    {
      title: "Posts",
      url: "https://www.canva.com/linkedin-posts/templates/",
      image: "/post.png",
    },
    {
      title: "Connections",
      url: "https://youtu.be/EWSuMW5IarU?si=soT-ajQIz7NKkHoO&t=447",
      image: "/in1.png",
    },
    {
      title: "Job Application",
      url: "https://youtu.be/Au7vEXZhvFo?si=cw_LiPHqJW7GfciK&t=82",
      image: "/search.png",
    },
  ];
  return (
    <>
      <Card className="border-0 shadow-none mt-12">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-700">
            Importent resource
          </CardTitle>
          <CardDescription className="text-blue-600">
            Here are the list of resources that help you a lot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 p-3 rounded-md transition-all duration-300 ">
            {links.map((links, index) => (
              <li
                key={index}
                className="flex items-start bg-blue-50 p-3 rounded-md transition-all duration-300 hover:bg-blue-100"
              >
                <AlertDialog>
                  <AlertDialogTrigger>
                    <span className="text-blue-800">
                      {index + 1}. {links.title}
                    </span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <Image
                      src={links.image}
                      height={300}
                      width={400}
                      alt="img"
                    />
                    {links.title}
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>
                        <a href={links.url}>Visite here</a>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}

export default LinkCard;
