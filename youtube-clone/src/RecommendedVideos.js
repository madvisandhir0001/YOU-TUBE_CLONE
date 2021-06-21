import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";


function RecommendedVideos  ()  {
    return (
        <div className="RecommendedVideos">
            <h2>Recommended</h2>
               <div className="RecommendedVideos__videos">
                <VideoCard 
                  title="AMAZON REACT.JS Challenge"
                  views="14K views"
                  timestamp="Streamed 3 weaks ago"
                  channelImage="https://yt3.ggpht.com/ytc/AAUvwngXcU2LcXQqcPyZFVwF_sV2zjB04K5RVFGE7heEwc4=s900-c-k-c0x00ffffff-no-rj"
                  channel="Sonny Sangha"
                  image ="https://img.youtube.com/vi/3gIBqSKX8bE/mqdefault.jpg"/>
                <VideoCard 
                  title="Talja (Official Video) Jassa Dhillon| Deepak Dhillon|Gur Sidhu| New Punjabi Song 2021"
                  views="102,155,425 viws"
                  timestamp="Apr 17,2021"
                  channelImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERIQEhIVFRUQEREYFRgVFhgWFhUXGRMYGBYYGBMYHiggGBolGxUVITEhJSkrMC4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4mICUrNy8vLS8zLS0tLS0vLzYtLS0vLTUtLS0tLTAtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xABHEAABAwIDBQQGBgcFCQEAAAABAAIDBBEFEiEGEyIxUSNBYYEHJDJxkaEUQlJTscEzgpKzwtHwNENiorIlJjVjc3Th4vEV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EADYRAAIBAgQDBQcDAwUAAAAAAAABAgMRBBIhMUFRYQVxgZGxEyIyYqHB0Qbh8OLx8hQkM1Ky/9oADAMBAAIRAxEAPwCjUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERZYoy4hoFy4gAdSTYIDEi2KqndG90bxZzCQR4rXRO+qAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBS3YTC88hncOGLRvi8j8hr5hRiCIucGtFy4gAdSTYBW1hFAIIWRD6o4j1cdXH4rP7Sr+zpZVvL04ljDU80r8iLbfYX7NS0c7Nf/AAu/L4KEK5a2lbLG+J3svaQf5+8c1UtfSuikfG7mxxB/n7iLHzXHZdfPT9m94+n7beR1iqdpZlx9TUREWmVQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAkWF7OGogMsThna9zXNdoDoCLHu0PeuPV0ckTskjS1w7iPw6qa+jOTMJ4um7cPm0/wqX1mGskGWRjXjo4A293RY9btKVCvKnNXXDmrq/8v5lyGHVSCa3IFsFheZ7qhw0j0b4uI1PkD81Ol6io2saGMaGtHIAWA8kLCsnFYn29TP5dxapU1CNjyodt7hdw2paOVmv931T+XmFMbL5JGHAtcAQRYgi4I8QmGrujUU1/Ee1IZ42Kdp6d73BjGlzjyAFyu5V7Mvhp3zzOAcMoawam5cBxO5cidB8VYFJQxRX3cbWX55QBf3lR70gzWgjZ9uS/k1p/NwWvDtGVatGEFZN68Xb7FR4dQg5SdyvSviItcphERAEREAREQBERAEREAREQBERAEREAREQBFKH7JTf/AJ8eIt4mFzw9ttWNDsof4tuDfpoeXKMFRwqwqXyO9m0+9Hri1uTD0Xy2rgz72KRvmLPH+gq230qo7Y+q3VdSv7hPGD7nHKfk4r9FPpl8p+oH7PExkuMfR/2NDBu8GupwH0ywupl330qwvpVjxrluxwHU6xOgXdfSrC+lU0a54cMwqAekSXtYo/sRk/tO/wDVWs6mVNbdTZq6Yd0ZawfqtF/ndbPY7z4i/JP8FbFO1OxHURd2gwCSSmmquTImki49uxGa3gBfXr5r6ac4wV5O3DzM5Rb2OEi+lfF0eBERAEREAREQBERAEREAREQGeny52575czc1ueW+tr99lYlX6Lr6wVLSDyEjCP8AO0n8FWrVd2yeJ72kgeTchgafezhP4LJ7Vr4ihGM6Lsr2eifdv47eJbwsIVG4yK7rdgK+PlEJB1icHf5TZ3yXFOEVAeIzBKHuNg0scCT4XCvllSszKrxWZDt3ER+OCf0/JPLAxezZu4JRthpYaYgERwtY4EXB4bOuO+5v8VTnpG2NNHJvoRenldp/ynH6hPTofLu1txlSvtU2OaN8UrQ5kjSHA94P4HxWTgMbVwlZ1N0/iXPr3rh4riT1qCqRty2PzbE8tII5ggj3jUL9TYfUiWKOUcpI2P8A2mg/mvzxtfs2+jmy6ujfcxP+0Oh/xDv+Perm2BqicOpM3MRBvk0lo+QC1v1DlrUKVaDur6eKv9tSrg04zlFknLV5MS8tmXoSL5GzRoGN0CxOp1thy+6L1SaPLHNfT96/NmJ1G8mll+8lkd8XEj8V+k9pJCyjqntF3Mp5yB4iM2X592W2elrqhsMeg0L3n2Y2d7j49B3lfVfp2cYwq1puyVteS1f4KGMu3GKNrYzZh9bLrcQx23jvwY0/aPyHkrgdhbBHuQ0BmTIAOQba1l2MJwWKmhZBE2zGDzce9zj3klZ3U6zsf2rLE1brSK2X37/TYsUaKprrxPzZV4NOyV8O6kLmOIsGOJNjzFhyPNdCj2KrpP7ksHWQhvy5/JX6+mWF9KtCX6kqSXuwS83+CFYOK3bKipfRxJpvZmjwY0u+Zt+Ch2JwtZNIxhJax7mgm1zY2vp7lfmOPEFPNOf7qJ7vMDQfGy/PLjc6rU7IxdbE55TeislpbXiQYmnCnZRPCIi2SqEREAREQBERAEREAVh+jisvHLDf2HBw9zhY/NvzVeKU7APcKqwBs6N4d4DQgnzFvNU8fTz4eXRX8ifDSy1UWYJV7bOtdF8i4o2TdbULVx7HDTQOnDc+UsFr5b3cBzseq1a2ujhbnkdlbcC5vz8vcVxMbxqKWnkbBUBrhkOa7m2GcD2gL68vNWMPhXOcW43jdX3tvzRFVmlFq+tul/U2sE2tZiEv0WWmZlLXO4nCQXba3CW+PNTaCYNAa0ABoAAAsAByAA5KqNl65zJi+WrD2NjeSM8jrctbEf1dSWr2kgkiljinAe6GXKeIWIjcb5raWtfyUmMwXv2pxajbhdpc3qrkVGqst5PXwTJyyqWdlSqY2erJzUw5q7ON4Ls3spzeFiLHzVmtqVQxeA9hJJu9+9epNSqKorpEgZUKuq70tOilki+iNO7ke2++IvlcRe2TS9l02bZUd7b9t725O/kq/wATqqjfTWxANG9ls3fzDKM5sLBullawHZyzyVenflfNHv2TIK9XRZJeVmXxT1IexriPbaDbnzF7fNeMPooYAWwxRxhxuQxoaCepsNVy6Oq4Ga34G69eEarTrNr6SF7opZ2te21wQ7S4BHIdCFkLDVZNxppvorvjyRYbildmhtj6RDQ1JpxTCS0bHZjLk9q+lsp6KS7JY39NpY6osEe8Mgyh2a2V5b7Vhflfkqu23xSSWpElPiAijfDGWt3s0d+fFla22v5LQrKyqEVNlxMN7F9z9IqBnP0iXi0brpZtz9la77LhUw9NRjlk7Xfvt7Nu8ctl4X2KirNTet14ety9sq+GNV9sXtPFT0g+mVokc+WXK8ukkuAGaZnNvpfl4qY4PjsFU1z4JBI1jspIBFja9tR0WLXwVWi3dPKnbNZpPhxLMKkZJemhEvTDWbqhEQ51ErW/qt4z8w0eaoxWd6b6h5qaaOxyMgc5p7i5zyHgHqAxnxCrFfbdh0vZ4KL4ybb87eiRmYqV6r6BERa5XCIiAIiIAiIgCIiAzQOAcC5uYDuva/mFL6LGn00MYipR2mcuBDyRZ1hrz+KhS6MeIynIwzOa1txe7tAettSoK9FVVZ7eP2JaVTJqvt9yytnMSkqI3PkjyFshFrHlYG+vvXzaTFJKdjHRx5y5xBFjoLXvooVI8blvrh/Sy8VpdeGLTrp+a+h/YH1s/pm8VpfsO06+KyFgY58/C/w2l3bl3/UPLbjbe6N/EMakqIHCWm0ZLFYDeC9w+566W+a51Lbdz+qkcDNM0nF2rdPLnovUb+xk9cd7cOtpdNJNOuv5JSv7Of1xx4G62l4e0brr15adVcjBQTjFWWZbZ+SIJSzO75fKfMPy9r6qR2L/AK0murdNeq80GXOfVCOyn+tL9y/TXry81koH/pfWyexf3S8Oo4tenh1XigfxO9cceyn0tL9y/XXpz8l1Uvln3fNyPFbT+kzbP2+kw+qlnGOIuk08bHRWRmKrPCX9sz1tztTpaXXhPXReMPeN7F64XdrHpabXiGmumqq4zCuvLM3ay5SfMmoVlTVrbvmlyMRLc/8AZD7fPNL15rLiOXfS+pl3aya5pdeM66aarGX8f9sd7fK03XksmIP7WX1xze1k0tLpxHTTTRXfezrfZ/8Afp0K+lv8SSVW2dTE90bKYOaywBs/UAeC4uOVQkmdI+jLnPZE4kOlAuYmkiw6cvJYMVf20nrbm8XK0umnholfJxj1xzeyh0tN9y3XTrz81Xo0IU5KUI2bXzq+xJObkmm+PymbE3M7D1Mu9Xj+tLw6u4dOn5r5WOZu6f1Im0LtM03D28umnx16rxXyfovXHN7FndLxani06r5VS8EHrrh2TtbTcXbSa6fDXou0mlHv+fkzx2vLu+XobFS5n0eH1Injn4c03D7Hnr49F2MC2kloqYmCjtvKhwc129dyjbZ2uvfbyXCnm7CH11w4puK03F7HTXTx6r06b1Zvrzv07uK033beHr4+ajq0VUhkqK6b2efmxF2d1y+U7uN7Ty1tKfpFFfdVEWVrd632o5bm410ygeagNdIxziWR7sfZzF1j36u1XQnxWVrXRsqHvBex2fNIDo1wygE3tx6+4Likq3hMMqCairJu6SvbZcH/AHIas87138D4iIrZEEREAREQBERAEREAREQHRw97nFsQjbJmdwtcXDidYaZXN1Nh39y6tfSzwRWlomNYXg3vIRexAuRIbc+q52zn9rp/+tH+KlVcWOgxFsLpHETAzCX2WgSOvurXHMHnrYBUMRUarxjbTS/xcXbg0l5O706linG8G7+nK/I5dLh1S+G7KFjmS5HAh0mobmtpvb/WK06Nz3OfAykYXvFnNG9uMrgdQZNLEeCktNRsljw9hnfG/cktawe3lOYgOvYHRa8te+WCungaWSPqGB4H6RsQaB3ajUG9vFV41m21bjzkknmyq+uu19Laq3VSOPX/AM66XdtNNzj1UUtKcstJGwzMc0cUmouL67w+HReYmSMmMH0SPelr25byX4ozfXeEeyT/AOFn2ejc+KrfIM0TaZ4zu1yvuC0Mce++th4LuS1YjiZimjpJIIomNP3gJEh8mtK6nVcJOnlu/hveVnJpNL4npa91vbXoeRjmWa9l4bX14eRGMOndxTR00ZEADnkOkGUG4HOT39xXmWU08oD6WNroy11iZfAgg7wg+/VSDaaFkNI98ZGXEJmSN6hgYHkftk/FdDaCCKpnNC+zJmxxmnkPJxcwExP9/d/V/FioNqTTyu/GV0llTb11Sbaa4Wb6Bwa0vr3LjfpySIbWyGGQtkpYmvFjYmTv1HKSy3ocOqKkGdlExzZHPN8z9TmN/wC9HffuX30ix5a546Rw/uws/o2zOq8lzYQTm1zb2eiknP8A2ixC3y5t5Phey95NfzQ5j/yZHtfp+DTxOGYThklGwSy2c1t5HOdckC2WT/CfgsuM0NRE0TT0UbGnI0EuedQ2wHDLpo1b2wDXvNY6Ml1SyicYL6uvfiy3+tysPFedgIZpq+MSB0jIzI6be3c1g3bg5z83sm5tfmuJ1HTc9rUo3estdOHve6uCve70C1t83d+Nfocqvc8NgdJSxgSRN3WshzNB0tlk6nkdVlFPNJM2kFGzexB7cl5Lixc92u8AtxE81MNnYoJqRlS83jwepqXWPN8RGeFov3l+Tn0WdlVG+kmxwFolNE+nkaO6oLmsa+3i0t8rKrLHON4qDum47y+NtqKtfROOr71qrnahxcuvDbjw8CCVj3siiL6WMMeJHRuvIWuFwHWIk6t7z0WviUUrYYS6FscUxe+MtJOe1muPE5xFtOinzK2lGG4bSVjexqop+1HtQSNkAZIPDjIPh4XXJ9JOHmnpsMpy4OMUdSMzeThvGFpHvBB81Yo4u9aNNxs3OS1baaWbVa2vdWknzunZq3E4PK3fguXQr5ERa5WCIiAIiIAiIgCIiAIiIAiIgNilqHRvbIw2cwgg87EclIdpK6ua1kVQ/hmjZIA0ABwPIOIAuQRqFwKCnMkscQ5yPYwfrOA/NXD6ScEZNSSGOxlw7K5wHMRuYC7yygO/UKzsZioUcRSjJJ3vrb4dUk78Pef1J6cHKErP9+f0K2wptXUlu6OtDE57Da2VrSDa4GpJ5A81pw45OyZ1Qx+V7zdxaAA7rdtrFW16L8Hjp6WMy2EuIlzmg8zG1pLR7spLv1wqaxCmMUskR5xSPYf1XFv5LnC4mniK1Wmoq0dFpurvN3rMhUjKEYyvq/4jsS4tV18kVMXjtHta1oAYzMTYE25+a18fp6incKKdw9XJIDTdoMgDib217vmvew//ABGj/wC5h/1LpelU/wC1Kj3Q/umqSNRQxaw8YpRyOW3G9vR9/U8avTc29b2+hqYjhVUKCmqpHNNPd7YRfibmc7NcW5XYe9cvEsUlnl30jrvswXADfZFm8vcpxj0n+7lC3pP/ABzqt17ga0qynKaV4zklblf77vmeVY5bJcUmSzD8HrsXldKAHFjWNfI85G8LbNuQNXWHcFt1ezWI4VeqGTKGlpkjIkaA/h1DgCL3Gtlv7D4hDLQVGGSS7l8zyWvGma+XS/eeCxb3tNlwtocIrKSPcvkc6nLwRlcTFm1tdh9k6/8A1V1VqyxDoPLGN7KDj8UeLT26ZUtOJJkShn1fW+zODQVkkMjZYnuY9hu1zTYg/wBd3eppLjeKV9HO8zMEMLTvg0NjdIA25vlF3ad1wCoApzsnJbDMQHVrv3Sn7QUVFVcsXJNWbSdrtXtyOaCcm43drP0IpFiErIpIGvIjmMZkb3OLCS34E/gvVPWzbp1KxziyWRjiwa5ntuG2HO+vdzsOi0Hc1M/RvTN3k07hcwMGXwLs1yPGzbeZVjEzhSpSqON7a972XjtrucUouc1G5nfspiM8EMchja2na4Rsc6zmhxBN8rT3gcyuBtAKqMRU1Te1OH7q+vC4i4a8c28It05LDiOO1EshkdK8Em4DXEBo7g0DlZa1fiMs5DpXueWtABd3D+u9R0aVeLXtHG2rslazfJ9bu9978dzqcqbXu38Xw6miiIrZCEREAREQBERAEREAREQBERASPYKFrsRpc5Aa2XOS42HAC8anxaFMKTahrMdqsxBgqnbh9zdtmtDGHpa7SPc8qrUuqOIwMK05Tk94Zfre/fe3kSwquKSXO/7FoV21LX45TFrgIaV+4Zb2eJpY8+67gPcwKH7dRtGIVJaQWvkzgg3BztDzr73FR+6XXtDBQozjKL2hl+t7+bfmJ1XJNPnc3cIrTBPFOBcxSMeB1ym9lYGO4TT4jJ9MhqWsL2tEjXC5BAtqLgtNtLHoqxX267r4dzmqkJZZJWvvdPg16CFRRTi1dE32yxOFtNBh8D87YDdzgQRcA6XGhJLnE25KEJdfFJQoqjDKteLfFt6tnNSbnK5JcEwOGoiNqlrJ8x4H6Attp4k+Iv7lIMSkFLhzqWaZssr9GNBzZRcEanXKLE3Nuiru6XUVTDSqTTlP3U72st113sdxqqMdI62tfX0CmezMjRh1cC4AlrrAkXPZ9wULX26lr0VWhlbtqn5O5zTnklfp6hykOx+NilmJfrHIA19tSNdHW77a6dCVHUXdWnGrBwlszmE3BqSJ9U7HwTOMlPVRiNxvbR2XqAQRp4Hko3tDQwQyBkE29GXiOmjvBw0P5LjXQlQ0qNWEryqOS5WX1fH6Hc6kJLSNn4nxERWSIIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA/9k="
                  channel="Brown Town Music"
                  image ="https://img.youtube.com/vi/wyQg8bBIwLE/mqdefault.jpg"/>
                <VideoCard 
                  title="START TO MY CHANNEL"
                  views="4M Views"
                  timestamp="2 days ago"
                  channelImage="https://avatars.githubusercontent.com/u/52520984?s=60&v=4"
                  channel="Madvi's World"
                  image ="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2017/11/Pic-1024x664.jpg"/>
                <VideoCard 
                  title="Khabbi Seat - Official Video | Ammy Virk Ft Sweetaj Brar | Happy Raikoti | MixSingh|Burfi Music"
                  views="4M Views"
                  timestamp="2 days ago"
                  channelImage="https://yt3.ggpht.com/ytc/AAUvwnibPT7KWN5XcDho2xcHnHYcqwvtapv1uh6bD4sx=s900-c-k-c0x00ffffff-no-rj"
                  channel="Burfi Music"
                  image ="https://img.youtube.com/vi/aOlQhmyog7k/mqdefault.jpg"/>
                <VideoCard 
                  title="Rank pushing 15 kills"
                  views="62 views"
                  timestamp="1 year ago"
                  channelImage="https://yt3.ggpht.com/ytc/AAUvwnhGl-3u-TlEZlQ1OOvO0Maxs7GCbOvy9dlsetIItA=s176-c-k-c0x00ffffff-no-rj"
                  channel="VR Killers"
                  image ="https://img.youtube.com/vi/_ljW_OIPeU4/mqdefault.jpg"/>
                <VideoCard
                  title="3 Idiots Climax Comedy Scene - Aamir Khan - Kareena Kapoor -Sharman Joshi -Madhavan"
                  views="23,713,152 views"
                  timestamp="Dec 3,2020"
                  channelImage="https://yt3.ggpht.com/ytc/AAUvwnirrwTydiiRNiFfCnPB4fYRP8GfqpdzfaXPcBgz=s88-c-k-c0x00ffffff-no-rj"
                  channel="Haste Raho"
                  image ="https://img.youtube.com/vi/Lk8r0Ig62zU/mqdefault.jpg"/> 
                <VideoCard 
                  title="START TO MY CHANNEL"
                  views="35 views"
                  timestamp="Oct 14,2020"
                  channelImage="https://yt3.ggpht.com/ytc/AAUvwngyin3WvsEzV14Sb8rbPb6D73QLs5yhWSLvoFyJ=s88-c-k-c0x00ffffff-no-rj"
                  channel="Gurumeet sandhir"
                  image ="https://img.youtube.com/vi/8YuUlv8bBz8/mqdefault.jpg"/>
                <VideoCard 
                  title="Din Shagna Da Video Song | Phillauri | Anushka Sharma, Diljit Dosanjh | Jasleen Royal"
                  views="17,351,128 views"
                  timestamp="Mar 29,2017"
                  channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s88-c-k-c0x00ffffff-no-rj"
                  channel="T-Series"
                  image ="https://img.youtube.com/vi/0_jqfezGhjI/mqdefault.jpg"/>

                </div>    
        </div>
    );
}

export default RecommendedVideos;
