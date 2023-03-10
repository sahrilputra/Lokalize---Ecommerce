// import Fragment
// import { Typography } from "@mui/material" 


// export const SectionCustom = () => {

//     return (

//         <Fragment>
//         <Head>
//           <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
//         </Head>
  
//         <div className="max-w-md mx-auto">
//           <Card className="shadow-lg rounded-lg overflow-hidden">
//             <Grid container>
//               <Grid item xs={6}>
//                 <CardMedia
//                   component="img"
//                   alt="Custom product"
//                   height="100%"
//                   image={imageSrc}
//                   className="h-48 w-full object-cover"
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <CardContent className="flex flex-col h-full">
//                   <Disclosure>
//                     {({ open }) => (
//                       <>
//                         <div className="flex items-center justify-between">
//                           <Typography component="h2" variant="h5" className="font-semibold">
//                             Mulai Membuat Produk Kustom
//                           </Typography>
//                           <Disclosure.Button className="flex items-center text-gray-400 focus:outline-none focus:text-gray-500">
//                             <ArrowRightAltIcon
//                               className={classnames('h-5 w-5', open && 'transform rotate-90')}
//                             />
//                           </Disclosure.Button>
//                         </div>
//                         <Disclosure.Panel className="mt-4">
//                           <Typography variant="body2" color="textSecondary">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
//                             ligula auctor, scelerisque enim id, fringilla magna. Sed at ipsum mauris.
//                           </Typography>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             className="mt-4 self-start"
//                             style={{ backgroundColor: theme.palette.primary.main }}
//                           >
//                             Buat Sekarang
//                           </Button>
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                 </CardContent>
//               </Grid>
//             </Grid>
//           </Card>
//         </div>
//       </Fragment>
//     )
// }
