$unsorted = array(8,4,6,2,1,9,5,5,4,3,4,3);

function qsort($array) {
    $stack = array($array);
    $sorted = array();
    while (count($stack) > 0) {
        $temp = array_pop($stack);
        if (count($temp) == 1) {
            $sorted[] = $temp[0];
            continue;
        }
        $pivot = $temp[0];
        $left = $right = array();
        for ($i = 1; $i < count($temp); $i++) {
            if ($pivot > $temp[$i]) {
                $left[] = $temp[$i];
            } else {
                $right[] = $temp[$i];
            }
        }
        $left[] = $pivot;
        if (count($right)){
            array_push($stack, $right);
        }
        if (count($left)){
            array_push($stack, $left);
        }
    }
    return $sorted;
}

$sorted = qsort($unsorted);
print_r($sorted);

